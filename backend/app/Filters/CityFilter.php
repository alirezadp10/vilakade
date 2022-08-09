<?php

namespace App\Filters;

use App\Models\Villa;

class CityFilter extends Filters
{
    protected array $filters = [
        'has-villa',
    ];

    protected function hasVilla()
    {
        return $this->builder->whereHas('addresses', function ($q) {
            $q->whereAddressableType(Villa::class);
        });
    }
}