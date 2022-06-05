<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'         => $this->id,
            'name'       => $this->name,
            'mobile'     => $this->mobile,
            'bio'        => $this->bio,
            'birthday'   => jdate($this->birthday)->format('Y-m-d'),
            'age'        => $this->birthday?->age,
            'avatar'     => $this->getMedia('avatar')->last()->getUrl('thumb'),
            'created_at' => jdate($this->created_at)->toString(),
        ];
    }
}
