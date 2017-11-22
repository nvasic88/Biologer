@extends('layouts.dashboard', ['title' => 'Taxa'])

@section('content')
    <div class="box">
        <nz-taxa-table
            list-route="api.taxa.index"
            edit-route="admin.taxa.edit"
            delete-route="api.taxa.destroy"
            :categories="{{ json_encode(\App\Taxon::getCategoryOptions()) }}">
        </nz-taxa-table>
    </div>
@endsection

@section('breadcrumbs')
    <div class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li><a href="{{ route('contributor.index') }}">Dashboard</a></li>
            <li class="is-active"><a>Taxa</a></li>
        </ul>
    </div>
@endsection

@section('createButton')
    <a href="{{ route('admin.taxa.create') }}" class="button is-secondary is-outlined">
        @include('components.icon', ['icon' => 'plus'])
        <span>New</span>
    </a>
@endsection
