<?php

namespace App\Nova\Filters\Villa;

use Illuminate\Http\Request;
use Laravel\Nova\Filters\Filter;
use OptimistDigital\NovaInputFilter\InputFilter;

class VillaRateFilter extends InputFilter
{
    public function apply(Request $request, $query, $value)
    {
        return $query->where('rate', $value);
    }

    public function name()
    {
        return 'rate';
    }
}
