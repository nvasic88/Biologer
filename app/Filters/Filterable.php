<?php

namespace App\Filters;

trait Filterable
{
    protected function filters()
    {
        return [];
    }

    public function scopeFilter($query, $request)
    {
        $filters = $this->filters();

        foreach ($request->all() as $param => $value) {
            if (array_key_exists($param, $filters)
                && $value && class_exists($filters[$param])) {
                (new $filters[$param]())->apply($query, $value);
            }
        }

        return $query;
    }
}
