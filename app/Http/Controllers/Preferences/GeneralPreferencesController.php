<?php

namespace App\Http\Controllers\Preferences;

use Illuminate\Http\Request;
use App\Events\UserProfileUpdated;
use App\Http\Controllers\Controller;

class GeneralPreferencesController extends Controller
{
    public function index(Request $request)
    {
        return view('preferences.general', [
            'user' => $request->user(),
        ]);
    }

    public function update(Request $request)
    {
        $request->user()->update($request->validate([
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'institution' => ['nullable', 'string'],
        ], [], [
            'first_name' => __('labels.register.first_name'),
            'last_name' => __('labels.register.last_name'),
            'institution' => __('labels.register.institution'),
        ]));

        UserProfileUpdated::dispatch($request->user());

        return back()->withSuccess(__('Profile updated successfully.'));
    }
}