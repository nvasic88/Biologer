<?php

namespace App\Http\Controllers\Api\My;

use App\FieldObservation;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\FieldObservation as FieldObservationResource;

class PendingObservationsController extends Controller
{
    public function index(Request $request)
    {
        $query = FieldObservation::with(['observation.taxon', 'photos'])
            ->pending()->curatedBy($request->user())->filter($request);

        if ($request->has('page')) {
            return FieldObservationResource::collection(
                $query->paginate($request->input('per_page', 15))
            );
        }

        return FieldObservationResource::collection($query->get());
    }
}
