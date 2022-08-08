<?php

namespace App\Models;

use App\Filters\VillaFilter;
use App\Traits\VillaAddressTrait;
use App\Traits\VillaCategoriesTrait;
use App\Traits\VillaOptionsTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Villa extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, VillaOptionsTrait, VillaAddressTrait, VillaCategoriesTrait;

    protected $fillable = [
        'title',
        'rooms',
        'capacity',
        'area',
        'foundation',
        'rate',
        'instant_delivery',
        'price',
        'discount',
    ];

    public static $rules = [
        'title'            => ['required', 'max:50'],
        'rooms'            => ['required', 'integer', 'gte:0', 'lte:20'],
        'capacity'         => ['required', 'integer', 'gte:0', 'lte:1000'],
        'area'             => ['required', 'integer', 'gte:10'],
        'foundation'       => ['required', 'integer', 'gte:10'],
        'rate'             => ['nullable', 'integer', 'gte:0', 'lte:5'],
        'instant_delivery' => ['nullable', 'boolean'],
        'price'            => ['required', 'integer', 'gte:1000'],
        'discount'         => ['required', 'integer', 'gte:0', 'lte:100'],
    ];

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')->width(130)->height(130);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('images');
    }

    public function getImageAttribute()
    {
        return $this->getMedia('images')->first()->getUrl();
    }

    public function getImagesAttribute()
    {
        return $this->getMedia('images')->all();
    }

    public function reserves()
    {
        return $this->hasMany(Reservation::class);
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function scopeFilter($query, VillaFilter $filters)
    {
        return $filters->apply($query);
    }
}
