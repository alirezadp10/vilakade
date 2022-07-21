<?php

namespace App\Nova\Filters\Villa;

use Illuminate\Http\Request;
use Laravel\Nova\Filters\Filter;
use OptimistDigital\NovaInputFilter\InputFilter;

class VillaCapacityFilter extends InputFilter
{
    public function apply(Request $request, $query, $value)
    {
        return $query->where('capacity', $value);
    }

    public function name()
    {
        return 'capacity';
    }
}
