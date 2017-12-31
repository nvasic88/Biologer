<?php

namespace App\Http\Controllers\Admin;

use App\Taxon;
use App\RedList;
use App\Convention;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TaxaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.taxa.index');
    }

    /**
     * Show page to create taxon.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.taxa.create', [
            'rankOptions' => Taxon::getRankOptions(),
            'conventions' => Convention::all(),
            'redLists' => RedList::all(),
        ]);
    }

    /**
     * Show page to edit taxon.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Taxon $taxon)
    {
        return view('admin.taxa.edit', [
            'taxon' => $taxon->load(['parent', 'redLists']),
            'rankOptions' => Taxon::getRankOptions(),
            'conventions' => Convention::all(),
            'redLists' => RedList::all(),
        ]);
    }
}