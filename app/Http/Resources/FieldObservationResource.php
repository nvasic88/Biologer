<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class FieldObservationResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        $fieldObservation = parent::toArray($request);

        $fieldObservation['photos'] = PhotoResource::collection($fieldObservation['photos']);

        return $fieldObservation;
    }
}
