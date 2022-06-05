<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReservationResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            "id"         => $this->id,
            "from_date"  => jdate($this->from_date)->toString(),
            "until_date" => jdate($this->until_date)->toString(),
            "cost"       => $this->cost,
            "villa"      => VillaResource::make($this->villa)->only(["title", "images", "city", "province"]),
        ];
    }
}
