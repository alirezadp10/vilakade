<?php

namespace App\Traits;

use App\Models\Option;

trait VillaOptionsTrait
{
    public function options()
    {
        return $this->belongsToMany(Option::class, 'villas_options');
    }

    public function setKitchenAppliancesOptionAttribute($value)
    {
        $this->options()->sync(Option::whereIn('title', $value)->pluck('id'));
    }

    public function setEntertainmentFacilitiesOptionAttribute($value)
    {
        $this->options()->toggle(Option::whereIn('title', $value)->pluck('id'));
    }

    public function setWelfareAmenitiesOptionAttribute($value)
    {
        $this->options()->toggle(Option::whereIn('title', $value)->pluck('id'));
    }

    public function getKitchenAppliancesOptionAttribute()
    {
        return $this->options->where('type', 'تجهیزات آشپزخانه')->pluck('title')->toArray();
    }

    public function getEntertainmentFacilitiesOptionAttribute()
    {
        return $this->options->where('type', 'امکانات سرگرمی')->pluck('title')->toArray();
    }

    public function getWelfareAmenitiesOptionAttribute()
    {
        return $this->options->where('type', 'امکانات رفاهی')->pluck('title')->toArray();
    }
}