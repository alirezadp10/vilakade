<?php

namespace App\Nova\Filters\Villa;

use App\Models\City;
use Illuminate\Http\Request;
use Laravel\Nova\Filters\Filter;

class VillaCityFilter extends Filter
{
    public $component = 'searchable-select-filter';

    public function apply(Request $request, $query, $value)
    {
        return $query->whereHas('address', function ($q) use ($value) {
            return $q->whereHas('city', function ($q) use ($value) {
                $q->where('name', $value);
            });
        });
    }

    public function options(Request $request)
    {
        $cities = City::all()->pluck('name')->toArray();
        return array_combine($cities, $cities);
    }

    public function name()
    {
        return 'city';
    }
}
