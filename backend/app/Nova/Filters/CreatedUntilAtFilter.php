<?php

namespace App\Nova\Filters;

use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Laravel\Nova\Filters\DateFilter;

class CreatedUntilAtFilter extends DateFilter
{
    public function apply(Request $request, $query, $value)
    {
        return $query->where('created_at', '<=', Carbon::parse($value));
    }

    public function name()
    {
        return 'created until';
    }
}
