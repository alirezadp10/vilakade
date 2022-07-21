<?php

namespace App\Nova\Filters\Villa;

use App\Models\Villa;
use Illuminate\Http\Request;
use Laravel\Nova\Filters\Filter;

class VillaTypeFilter extends Filter
{
    public function apply(Request $request, $query, $value)
    {
        return $query->whereType($value);
    }

    public function options(Request $request)
    {
        return collect(Villa::TYPES)->mapWithKeys(fn($v, $k) => [__('app.'.strtolower($k)) => $v])->toArray();
    }

    public function name()
    {
        return 'type';
    }
}
