<?php

namespace App\Nova\Filters\Villa;

use Illuminate\Http\Request;
use Laravel\Nova\Filters\Filter;
use OptimistDigital\NovaInputFilter\InputFilter;

class VillaOwnerFilter extends InputFilter
{
    public function apply(Request $request, $query, $value)
    {
        return $query->where('user_id', $value);
    }

    public function name()
    {
        return 'owner id';
    }
}
