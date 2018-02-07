@extends('layouts.main')

@section('content')
    <section class="section is-hidden-touch mb-8">
        <div class="container has-text-centered">
            <img src="{{ asset('img/logo.svg') }}" class="image banner-image mx-auto">
        </div>
    </section>

    <div class="container pb-8">
        <p class="is-size-4 mb-8">Welcome to our web site working with species observation records in
        Serbia. Please note that this is only a beta version of the software,
        so we urge you to be patient. Also, feel free to report any problems or
        new ideas.</p>

        <div class="columns">
            <div class="column is-size-5">
                <p>What works:</p>

                <ul class="is-done">
                    <li>User registration</li>
                    <li>Data input (through the web interface)</li>
                    <li>Translations to multiple languages</li>
                </ul>
            </div>
            <div class="column is-size-5">
                <p>What doesn't work yet:</p>

                <ul class="is-not-done">
                    <li>‎Data view</li>
                    <li>‎Data export</li>
                    <li>Notifications</li>
                    <li>Conversation between the users</li>
                    <li>Android application</li>
                </ul>
            </div>
        </div>
    </div>
@endsection