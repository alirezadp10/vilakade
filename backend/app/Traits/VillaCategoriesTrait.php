<?php

namespace App\Traits;

use App\Models\Category;

trait VillaCategoriesTrait
{
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'villas_categories');
    }

    public function setCategoryAttribute($value)
    {
        $this->categories()->sync(Category::whereIn('title', $value)->pluck('id'));
    }

    public function getCategoryAttribute()
    {
        return $this->categories()->pluck('title')->toArray();
    }
}