<?php

namespace App\Http\Requests;

use App\Stage;
use App\Taxon;
use App\License;
use App\Rules\Day;
use App\Observation;
use App\Rules\Month;
use App\ObservationType;
use App\FieldObservation;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateFieldObservation extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'taxon_id' => ['nullable', 'exists:taxa,id'],
            'taxon_suggestion' => ['nullable', 'string', 'max:255'],
            'year' => ['bail', 'required', 'date_format:Y', 'before_or_equal:now'],
            'month' => [
                'bail',
                'nullable',
                new Month($this->input('year')),
            ],
            'day' => [
                'bail',
                'nullable',
                new Day($this->input('year'), $this->input('month')),
            ],
            'latitude' => ['required', 'numeric', 'between:-90,90'],
            'longitude' => ['required', 'numeric', 'between:-180,180'],
            'elevation' => ['required', 'integer', 'max:10000'],
            'accuracy' => ['nullable', 'integer', 'max:10000'],
            'observer' => ['nullable', 'string'],
            'identifier' => ['nullable', 'string'],
            'sex' => ['nullable', Rule::in(Observation::SEX_OPTIONS)],
            'stage_id' => ['nullable', Rule::in(Stage::pluck('id')->all())],
            'number' => ['nullable', 'integer', 'min:1'],
            'found_dead' => ['nullable', 'boolean'],
            'found_dead_note' => ['nullable'],
            'data_license' => ['nullable', Rule::in(License::ids()->all())],
            'image_license' => ['nullable', Rule::in(License::ids()->all())],
            'photos' => ['nullable', 'array', 'max:'.config('biologer.photos_per_observation')],
            'photos.*.id' => ['required_without:photos.*.path', 'integer'],
            'photos.*.path' => ['required_without:photos.*.id', 'string'],
            'photos.*.crop' => ['nullable', 'array'],
            'photos.*.crop.x' => ['required_with:photos.*.crop', 'integer'],
            'photos.*.crop.y' => ['required_with:photos.*.crop', 'integer'],
            'photos.*.crop.width' => ['required_with:photos.*.crop', 'integer'],
            'photos.*.crop.height' => ['required_with:photos.*.crop', 'integer'],
            'time' => ['nullable' ,'date_format:H:i'],
            'project' => ['nullable', 'string', 'max:191'],
            'found_on' => ['nullable', 'string', 'max:191'],
            'note' => ['nullable', 'string'],
            'reason' => ['required', 'string', 'max:255'],
            'observation_types_ids' => [
                'nullable', 'array', Rule::in(ObservationType::pluck('id')->all()),
            ],
        ];
    }

    /**
     * Store observation and related data.
     *
     * @param  \App\FieldObservation  $fieldObservation
     * @return \App\FieldObservation
     */
    public function save(FieldObservation $fieldObservation)
    {
        $oldData = $fieldObservation->toArray();

        $fieldObservation->observation->update($this->getGeneralObservationData());
        $fieldObservation->update($this->getSpecificObservationData());

        $photoSync = $fieldObservation->syncPhotos(
            collect($this->input('photos', [])),
            $this->input('image_license') ?: $this->user()->settings()->get('image_license')
        );

        $this->syncRelations($fieldObservation);

        $this->logActivity($fieldObservation, $oldData, $photoSync);

        $fieldObservation->moveToPending();

        return $fieldObservation;
    }

    /**
     * Get observation data specific to field observation from the request.
     *
     * @return array
     */
    protected function getSpecificObservationData()
    {
        return [
            'found_dead' => $this->input('found_dead', false),
            'found_dead_note' => $this->input('found_dead', false) ? $this->input('found_dead_note') : null,
            'license' => $this->input('data_license') ?: $this->user()->settings()->get('data_license'),
            'taxon_suggestion' => $this->input('taxon_id')
                ? Taxon::find($this->input('taxon_id'))->name
                : $this->input('taxon_suggestion'),
            'time' => $this->input('time'),
        ];
    }

    /**
     * Get general observation data from the request.
     *
     * @return array
     */
    protected function getGeneralObservationData()
    {
        return [
            'taxon_id' => $this->input('taxon_id'),
            'year' => $this->input('year'),
            'month' => $this->input('month'),
            'day' => $this->input('day'),
            'location' => $this->input('location'),
            'latitude' => $this->input('latitude'),
            'longitude' => $this->input('longitude'),
            'mgrs10k' => mgrs10k($this->input('latitude'), $this->input('longitude')),
            'accuracy' => $this->input('accuracy'),
            'elevation' => $this->input('elevation'),
            'observer' => $this->input('observer') && $this->user()->hasAnyRole(['admin', 'curator'])
                ? $this->input('observer')
                : $this->user()->full_name,
            'identifier' => $this->input('identifier') && $this->user()->hasAnyRole(['admin', 'curator'])
                ? $this->input('identifier')
                : null,
            'sex' => $this->input('sex'),
            'number' => $this->input('number'),
            'stage_id' => $this->input('stage_id'),
            'project' => $this->input('project'),
            'found_on' => $this->input('found_on'),
            'note' => $this->input('note'),
        ];
    }

    /**
     * Log update activity for field observation.
     *
     * @param  \App\FieldObservation  $fieldObservation
     * @param  array  $oldData
     * @param  array  $photoSync
     * @return void
     */
    protected function logActivity(FieldObservation $fieldObservation, array $oldData, $photoSync)
    {
        activity()->performedOn($fieldObservation)
           ->causedBy($this->user())
           ->withProperty('old', $this->getChangedData($fieldObservation, $oldData, $photoSync))
           ->withProperty('reason', $this->input('reason'))
           ->log('updated');
    }

    /**
     * Get changed field observation data.
     * NOTE: This is seriously wierd thing and needs to be refactored and simplified.
     *
     * @param  \App\FieldObservation  $fieldObservation
     * @param  array  $oldData
     * @return array
     */
    protected function getChangedData(FieldObservation $fieldObservation, array $oldData, $photoSync)
    {
        $excluded = ['taxon_id', 'mgrs10k', 'time'];
        $changed = array_merge(
            array_keys($fieldObservation->observation->getChanges()),
            array_keys($fieldObservation->getChanges())
        );

        $data = [];
        foreach ($oldData as $key => $value) {
            if ('time' === $key && $this->timeIsChanged($fieldObservation, $value)) {
                $data[$key] = $value;
            } elseif ('photos' === $key && $this->photosAreChanged($photoSync)) {
                // We just need to know that it changed. It's confusing to show what.
                $data[$key] = null;
            } elseif ('types' === $key && $this->observationTypesAreChanged($fieldObservation, $value)) {
                $data[$key] = null;
            } elseif (in_array($key, $changed) && ! in_array($key, $excluded)) {
                if ('taxon_suggestion' === $key) {
                    // We need it with the key of "taxon", not "taxon_suggestion".
                    $data['taxon'] = $value;
                } elseif ('stage_id' === $key) {
                    // We need it with the key of "stage", not "stage_id".
                    $data['stage'] = [
                        'value' => $value,
                        'label' => $value ? 'stages.'.Stage::find($value)->name : null,
                    ];
                } elseif ('sex' === $key) {
                    $data[$key] = [
                       'value' => $value,
                       'label' => $value ? 'labels.field_observations.'.$value : null,
                   ];
                } elseif ('license' === $key) {
                    // We need it with the key of "data_license", not "license".
                    $data['data_license'] = [
                        'value' => $value,
                        'label' => 'licenses.'.License::findById($value)['name'],
                    ];
                } elseif ('found_dead' === $key) {
                    $data[$key] = ['value' => $value, 'label' => $value ? 'Yes' : 'No'];
                } else {
                    $data[$key] = $value;
                }
            }
        }

        return $data;
    }

    /**
     * Check if time changed.
     *
     * @param  \App\FieldObservation  $fieldObservation
     * @param  string  $oldValue
     * @return bool
     */
    protected function timeIsChanged($fieldObservation, $oldValue)
    {
        return ($oldValue && ! $fieldObservation->time)
            || $fieldObservation->time
            && $oldValue !== $fieldObservation->time->format('H:i');
    }

    /**
     * Check if photos are changed.
     *
     * @param  array  $photoSync
     * @return bool
     */
    protected function photosAreChanged($photoSync)
    {
        return count($photoSync['cropped'])
            || count($photoSync['removed'])
            || count($photoSync['added']);
    }

    /**
     * Check if observations types have changed.
     *
     * @param  \App\FieldObservation  $fieldObservation
     * @param  \Illuminate\Database\Eloquent\Collection  $oldValue
     * @return bool
     */
    protected function observationTypesAreChanged($fieldObservation, $oldValue)
    {
        $fieldObservation->observation->load('types');

        return $oldValue->count() !== $fieldObservation->observation->types->count()
            || ($oldValue->isNotEmpty() && $fieldObservation->observation->types->isNotEmpty()
            && $oldValue->pluck('id')->diff($fieldObservation->observation->types->pluck('id'))->isNotEmpty());
    }

    /**
     * Sync field observation relations.
     *
     * @param  \App\FieldObservation  $fieldObservation
     * @return void
     */
    protected function syncRelations(FieldObservation $fieldObservation)
    {
        $fieldObservation->observation->types()->sync($this->input('observation_types_ids', []));
    }
}
