<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterViewGroupsTableAddOnlyObservedTaxaColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('view_groups', function (Blueprint $table) {
            $table->boolean('only_observed_taxa')->after('sort_order')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('view_groups', function (Blueprint $table) {
            $table->dropColumn('only_observed_taxa');
        });
    }
}
