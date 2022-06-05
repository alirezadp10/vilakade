<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

abstract class Filters
{
    protected Request $request;

    protected Builder $builder;

    protected array $filters = [];

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function apply($builder)
    {
        $this->builder = $builder;

        foreach ($this->getFilters() as $filter => $value) {
            if (method_exists($this, $filter) || method_exists($this, $filter = Str::camel($filter)) ) {
                $this->$filter($value);
            }
        }

        return $this->builder;
    }

    public function getFilters()
    {
        return array_merge(
            $this->request->only($this->filters),
            (array) $this->parseFiltersFrom($this->request->filters)
        );
    }

    public function parseFiltersFrom($filters)
    {
        return is_array($filters) ? $filters : json_decode($filters, true);
    }
}
