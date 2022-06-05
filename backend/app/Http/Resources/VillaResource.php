<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class VillaResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'               => $this->id,
            'images'           => collect($this->images)->map->only('original_url'),
            'categories'       => CategoryResource::collection($this->categories)->toArray($request),
            'title'            => $this->title,
            'rooms'            => $this->rooms,
            'capacity'         => $this->capacity,
            'area'             => $this->area,
            'foundation'       => $this->foundation,
            'instant_delivery' => $this->instant_delivery,
            'type'             => __("app.$this->type"),
            'rate'             => $this->rate,
            'city'             => $this->city,
            'province'         => $this->province,
            'price'            => $this->price,
            'discount'         => $this->discount,
            'created_at'       => jdate($this->created_at)->toString(),
        ];
    }

    public function only($attributes)
    {
        return Arr::only($this->toArray(request()), $attributes);
    }
}
