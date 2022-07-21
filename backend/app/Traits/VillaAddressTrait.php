<?php

namespace App\Traits;

use App\Models\Address;
use App\Models\City;

trait VillaAddressTrait
{
    public function getCityAttribute()
    {
        return $this->address()->first()?->city?->name;
    }

    public function getProvinceAttribute()
    {
        return $this->address()->first()?->city?->province?->name;
    }

    public function address()
    {
        return $this->morphOne(Address::class, 'addressable');
    }
}