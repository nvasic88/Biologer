<?php

namespace App\Importing;

use App\DEM\Reader as DEMReader;
use App\LiteratureObservation;
use App\License;
use App\Observation;
use App\Rules\Day;
use App\Rules\Decimal;
use App\Rules\Month;
use App\Stage;
use App\Support\Dataset;
use App\Taxon;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class LiteratureObservationImport extends BaseImport
{
    /**
     * @var \App\DEM\Reader
     */
    protected $demReader;

    /**
     * Create new importer instance.
     *
     * @param  \App\Import  $import
     * @param  \App\DEM\Reader  $demReader
     * @return void
     */
    public function __construct($import, DEMReader $demReader)
    {
        parent::__construct($import);

        $this->setDEMReader($demReader);
    }

    /**
     * Set DEM reader instance to get missing elevation.
     *
     * @param  \App\DEM\Reader  $demReader
     * @return self
     */
    public function setDEMReader(DEMReader $demReader)
    {
        $this->demReader = $demReader;

        return $this;
    }

    /**
     * Definition of all calumns with their labels.
     *
     * @param  \App\User|null  $user
     * @return \Illuminate\Support\Collection
     */
    public static function columns($user = null)
    {
        return collect([
            [
                'label' => trans('labels.literature_observations.taxon'),
                'value' => 'taxon',
                'required' => true,
            ],
            [
                'label' => trans('labels.literature_observations.year'),
                'value' => 'year',
                'required' => true,
            ],
            [
                'label' => trans('labels.literature_observations.month'),
                'value' => 'month',
                'required' => false,
            ],
            [
                'label' => trans('labels.literature_observations.day'),
                'value' => 'day',
                'required' => false,
            ],
            [
                'label' => trans('labels.literature_observations.latitude'),
                'value' => 'latitude',
                'required' => true,
            ],
            [
                'label' => trans('labels.literature_observations.longitude'),
                'value' => 'longitude',
                'required' => true,
            ],
            [
                'label' => trans('labels.literature_observations.elevation'),
                'value' => 'elevation',
                'required' => false,
            ],
            [
                'label' => trans('labels.literature_observations.accuracy'),
                'value' => 'accuracy',
                'required' => false,
            ],
            [
                'label' => trans('labels.literature_observations.location'),
                'value' => 'location',
                'required' => false,
            ],
            [
                'label' => trans('labels.literature_observations.time'),
                'value' => 'time',
                'required' => false,
            ],
            [
                'label' => trans('labels.literature_observations.note'),
                'value' => 'note',
                'required' => false,
            ],
            [
                'label' => trans('labels.literature_observations.found_dead'),
                'value' => 'found_dead',
                'required' => false,
            ],
            [
                'label' => trans('labels.literature_observations.found_dead_note'),
                'value' => 'found_dead_note',
                'required' => false,
            ],
            [
                'label' => trans('labels.literature_observations.observer'),
                'value' => 'observer',
                'required' => false,
            ],
            [
                'label' => trans('labels.literature_observations.identifier'),
                'value' => 'identifier',
                'required' => false,
            ],
            [
                'label' => trans('labels.literature_observations.sex'),
                'value' => 'sex',
                'required' => false,
            ],
            [
                'label' => trans('labels.literature_observations.number'),
                'value' => 'number',
                'required' => false,
            ],
            [
                'label' => trans('labels.literature_observations.project'),
                'value' => 'project',
                'required' => false,
            ],
            [
                'label' => trans('labels.literature_observations.habitat'),
                'value' => 'habitat',
                'required' => false,
            ],
            [
                'label' => trans('labels.literature_observations.found_on'),
                'value' => 'found_on',
                'required' => false,
            ],
            [
                'label' => trans('labels.literature_observations.stage'),
                'value' => 'stage',
                'required' => false,
            ],
            [
                'label' => trans('labels.literature_observations.original_identification'),
                'value' => 'original_identification',
                'required' => false,
            ],
        ]);
    }

    /**
     * Get validation rules specific for import type.
     *
     * @return array
     */
    public static function specificValidationRules()
    {
        return [
            'publication_id' => ['required', 'exists:publications,id'],
            'is_original_data' => ['required', 'bool'],
            'cited_publication_id' => [
                'required_if:is_original_data,false', 'nullable', 'exists:publications,id',
            ],
        ];
    }

    /**
     * Make validator instance.
     *
     * @param  array  $data
     * @return \Illuminate\Validation\Validator
     */
    protected function makeValidator(array $data)
    {
        return Validator::make($data, [
            'taxon_id' => ['required', 'exists:taxa,id'],
            'year' => ['bail', 'nullable', 'date_format:Y', 'before_or_equal:now'],
            'month' => [
                'bail', 'nullable', 'numeric', new Month($this->input('year')),
            ],
            'day' => [
                'bail', 'nullable', 'numeric', new Day($this->input('year'), $this->input('month')),
            ],
            'latitude' => ['required', new Decimal(['min' => -90, 'max' => 90])],
            'longitude' => ['required', new Decimal(['min' => -180, 'max' => 180])],
            'elevation' => ['required', 'integer', 'max:10000'],
            'accuracy' => ['nullable', 'integer', 'max:10000'],
            'observer' => ['nullable', 'string'],
            'identifier' => ['nullable', 'string'],
            'stage_id' => ['nullable', Rule::in(Stage::pluck('id'))],
            'sex' => ['nullable', Rule::in(Observation::SEX_OPTIONS)],
            'number' => ['nullable', 'integer', 'min:1'],
            'photos' => ['nullable', 'array', 'max:'.config('biologer.photos_per_observation')],
            'time' => ['nullable', 'date_format:H:i'],
            'project' => ['nullable', 'string', 'max:191'],
            'found_on' => ['nullable', 'string', 'max:191'],
            'habitat' => ['nullable', 'string', 'max:191'],
            'note' => ['nullable', 'string'],
            'observed_by_id' => ['nullable', Rule::exists('users', 'id')],
            'identified_by_id' => ['nullable', Rule::exists('users', 'id')],
            'dataset' => ['nullable', 'string', 'max:255'],
            'data_license' => ['nullable', Rule::in(License::activeIds())],
            'minimum_elevation' => [
                'nullable', 'integer', 'max:10000', 'lte:maximum_elevation', 'lte:elevation',
            ],
            'maximum_elevation' => [
                'nullable', 'integer', 'max:10000', 'gte:minimum_elevation', 'gte:elevation',
            ],
            'publication_id' => ['required', 'exists:publications,id'],
            'is_original_data' => ['required', 'bool'],
            'cited_publication_id' => [
                'required_if:is_original_data,false', 'nullable', 'exists:publications,id',
            ],
            'original_date' => ['nullable', 'string', 'max:255'],
            'original_locality' => ['nullable', 'string', 'max:255'],
            'original_elevation' => ['nullable', 'string', 'max:255'],
            'original_coordinates' => ['nullable', 'string', 'max:255'],
            'original_identification' => ['required', 'string', 'max:255'],
            'original_identification_validity' => ['required', Rule::in(LiteratureObservationIdentificationValidity::values())],
            'georeferenced_by' => ['nullable', 'string', 'max:255'],
            'georeferenced_date' => ['nullable', 'string', 'max:255'],
            'place_where_referenced_in_publication' => ['nullable', 'string', 'max:255'],


            'taxon' => [
                'required',
                Rule::exists('taxa', 'name'),
            ],
            'year' => ['bail', 'required', 'date_format:Y', 'before_or_equal:now'],
            'month' => [
                'bail',
                'nullable',
                'numeric',
                new Month(Arr::get($data, 'year')),
            ],
            'day' => [
                'bail',
                'nullable',
                'numeric',
                new Day(Arr::get($data, 'year'), Arr::get($data, 'month')),
            ],
            'latitude' => ['required', new Decimal(['min' => -90, 'max' => 90])],
            'longitude' => ['required', new Decimal(['min' => -180, 'max' => 180])],
            'elevation' => ['nullable', 'integer', 'max:10000'],
            'accuracy' => ['nullable', 'integer', 'max:10000'],
            'observer' => ['nullable', 'string'],
            'identifier' => ['nullable', 'string'],
            'stage' => ['nullable', Rule::in(Stage::pluck('name'))],
            'sex' => ['nullable', Rule::in(Observation::SEX_OPTIONS)],
            'number' => ['nullable', 'integer', 'min:1'],
            'found_dead' => ['nullable', 'string', Rule::in($this->yesNo())],
            'found_dead_note' => ['nullable', 'string', 'max:1000'],
            'time' => ['nullable', 'date_format:H:i'],
            'project' => ['nullable', 'string', 'max:191'],
            'habitat' => ['nullable', 'string', 'max:191'],
            'found_on' => ['nullable', 'string', 'max:191'],
            'note' => ['nullable', 'string'],
            'original_identification' => ['nullable', 'string'],
            'dataset' => ['nullable', 'string'],
            'license' => ['nullable', 'string', Rule::in(License::allActive()->pluck('name'))],
        ], [
            'year.date_format' => trans('validation.year'),
        ], [
            'taxon' => trans('labels.field_observations.taxon'),
            'year' => trans('labels.field_observations.year'),
            'month' => trans('labels.field_observations.month'),
            'day' => trans('labels.field_observations.day'),
            'latitude' => trans('labels.field_observations.latitude'),
            'longitude' => trans('labels.field_observations.longitude'),
            'elevation' => trans('labels.field_observations.elevation'),
            'accuracy' => trans('labels.field_observations.accuracy'),
            'observer' => trans('labels.field_observations.observer'),
            'identifier' => trans('labels.field_observations.identifier'),
            'stage' => trans('labels.field_observations.stage'),
            'sex' => trans('labels.field_observations.sex'),
            'number' => trans('labels.field_observations.number'),
            'found_dead' => trans('labels.field_observations.found_dead'),
            'found_dead_note' => trans('labels.field_observations.found_dead_note'),
            'time' => trans('labels.field_observations.time'),
            'project' => trans('labels.field_observations.project'),
            'habitat' => trans('labels.field_observations.habitat'),
            'found_on' => trans('labels.field_observations.found_on'),
            'note' => trans('labels.field_observations.note'),
            'original_identification' => trans('labels.field_observations.original_identification'),
            'dataset' => trans('labels.field_observations.dataset'),
            'license' => trans('labels.field_observations.data_license'),
        ]);
    }

    /**
     * "Yes" and "No" options translated in language the import is using.
     *
     * @return array
     */
    protected function yesNo()
    {
        $lang = $this->model()->lang;

        return [__('Yes', [], $lang), __('No', [], $lang)];
    }

    /**
     * Store data from single CSV row.
     *
     * @param  array  $item
     * @return void
     */
    protected function storeSingleItem(array $item)
    {
        $fieldObservation = FieldObservation::create(
            $this->getSpecificObservationData($item)
        );

        $observation = $fieldObservation->observation()->save(
            new Observation($this->getGeneralObservationData($item))
        );

        activity()->performedOn($fieldObservation)
            ->causedBy($this->model()->user)
            ->log('created');

        if ($observation->isApproved()) {
            activity()->performedOn($fieldObservation)
                ->causedBy($this->model()->user)
                ->log('approved');
        }
    }

    /**
     * Get observation data specific to field observation from the request.
     *
     * @param  array  $item
     * @return array
     */
    protected function getSpecificObservationData(array $item)
    {
        return [
            'license' => Arr::get($item, 'data_license') ?: $this->model()->user->settings()->get('data_license'),
            'taxon_suggestion' => Arr::get($item, 'taxon') ?: null,
            'found_dead' => $this->getFoundDead($item),
            'found_dead_note' => $this->getFoundDead($item) ? Arr::get($item, 'found_dead_note') : null,
            'time' => Arr::get($item, 'time') ?: null,
            'observed_by_id' => $this->getObserverId($item),
            'identified_by_id' => $this->getIdentifierId($item),
            'license' => $this->getLicense($item),
        ];
    }

    /**
     * Get general observation data from the request.
     *
     * @param  array  $item
     * @return array
     */
    protected function getGeneralObservationData(array $item)
    {
        $latitude = $this->getLatitude($item);
        $longitude = $this->getLongitude($item);
        $taxon = $this->getTaxon($item);

        return [
            'taxon_id' => $taxon ? $taxon->id : null,
            'year' => Arr::get($item, 'year'),
            'month' => Arr::get($item, 'month') ?: null,
            'day' => Arr::get($item, 'day') ?: null,
            'location' => Arr::get($item, 'location') ?: null,
            'latitude' => $latitude,
            'longitude' => $longitude,
            'mgrs10k' => mgrs10k($latitude, $longitude),
            'accuracy' => Arr::get($item, 'accuracy') ?: null,
            'elevation' => $this->getElevation($item),
            'created_by_id' => $this->model()->for_user_id ?: $this->model()->user_id,
            'observer' => $this->getObserver($item),
            'identifier' => $this->getIdentifier($item),
            'sex' => Arr::get($item, 'sex') ?: null,
            'number' => Arr::get($item, 'number') ?: null,
            'note' => Arr::get($item, 'note') ?: null,
            'project' => Arr::get($item, 'project') ?: null,
            'habitat' => Arr::get($item, 'habitat') ?: null,
            'found_on' => Arr::get($item, 'found_on') ?: null,
            'stage_id' => $this->getStageId($item),
            'original_identification' => Arr::get($item, 'original_identification', Arr::get($item, 'taxon')),
            'dataset' => Arr::get($item, 'dataset') ?? Dataset::default(),
            'approved_at' => $this->getApprovedAt($taxon),
        ];
    }

    /**
     * Get ID of taxon using it's name.
     *
     * @param  array  $data
     * @return \App\Taxon|null
     */
    protected function getTaxon(array $data)
    {
        return Taxon::findByName(Arr::get($data, 'taxon'));
    }

    /**
     * Get latitude.
     *
     * @param  array  $data
     * @return float
     */
    protected function getLatitude(array $data)
    {
        return (float) str_replace(',', '.', Arr::get($data, 'latitude'));
    }

    /**
     * Get longitude.
     *
     * @param  array  $data
     * @return float
     */
    protected function getLongitude(array $data)
    {
        return (float) str_replace(',', '.', Arr::get($data, 'longitude'));
    }

    /**
     * Get elevation.
     *
     * @param  array  $data
     * @return |int|null
     */
    protected function getElevation(array $data)
    {
        $elevation = Arr::get($data, 'elevation');

        if (is_numeric($elevation)) {
            return $elevation;
        }

        if ($this->demReader) {
            return $this->demReader->getElevation(
                $this->getLatitude($data),
                $this->getLongitude($data)
            );
        }
    }

    /**
     * Get observer name.
     *
     * @param  array  $data
     * @return string|null
     */
    protected function getObserver(array $data)
    {
        if (! $this->model()->user->hasAnyRole(['admin', 'curator'])) {
            return $this->model()->user->full_name;
        }

        return Arr::get($data, 'observer') ?: $this->model()->user->full_name;
    }

    /**
     * Get observer ID.
     *
     * @param  array  $data
     * @return int
     */
    protected function getObserverId(array $data)
    {
        if ($this->shouldUseCurrentUserId(Arr::get($data, 'observer'))) {
            return $this->model()->user->id;
        }
    }

    /**
     * Get identifier name.
     *
     * @param  array  $data
     * @return string|null
     */
    protected function getIdentifier(array $data)
    {
        if (! $this->model()->user->hasAnyRole(['admin', 'curator'])) {
            return $this->model()->user->full_name;
        }

        return Arr::get($data, 'identifier') ?: $this->model()->user->full_name;
    }

    /**
     * Get identifier ID.
     *
     * @param  array  $data
     * @return int
     */
    protected function getIdentifierId(array $data)
    {
        if ($this->shouldUseCurrentUserId(Arr::get($data, 'identifier'))) {
            return $this->model()->user->id;
        }
    }

    /**
     * Check if the name matches current user.
     *
     * @param  string|null  $name
     * @return bool
     */
    private function shouldUseCurrentUserId($name = null)
    {
        return ! $this->model()->user->hasAnyRole(['admin', 'curator']) || ! $name;
    }

    /**
     * Get stage ID.
     *
     * @param  array  $data
     * @return int|null
     */
    protected function getStageId(array $data)
    {
        return optional(Stage::findByName(strtolower(Arr::get($data, 'stage', ''))))->id;
    }

    /**
     * Get value for "Found Dead" field.
     *
     * @param  array  $data
     * @return bool
     */
    protected function getFoundDead(array $data)
    {
        $value = Arr::get($data, 'found_dead', false);

        return $this->isTranslatedYes($value) || filter_var($value, FILTER_VALIDATE_BOOLEAN);
    }

    /**
     * Check if the value matches with "Yes" translation.
     *
     * @param string $value
     * @return bool
     */
    protected function isTranslatedYes($value)
    {
        if (! is_string($value)) {
            return false;
        }

        $yes = __('Yes', [], $this->model()->lang);

        return strtolower($yes) === strtolower($value);
    }

    /**
     * Create new import using data from request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \App\Import
     */
    protected static function createFromRequest($request)
    {
        $user = $request->user();

        return Import::create([
            'type' => static::class,
            'columns' => $request->input('columns', []),
            'path' => $request->file('file')->store('imports'),
            'user_id' => $user->id,
            'lang' => app()->getLocale(),
            'has_heading' => $request->input('has_heading', false),
            'options' => [
                'pubpication_id' => $request->input('publication_id'),
            ],
        ]);
    }
}
