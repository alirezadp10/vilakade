<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PaymentResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'         => $this->id,
            'res_num'    => $this->res_num,
            'amount'     => $this->amount,
            'status'     => $this->status,
            'type'       => 'rent',
            'created_at' => jdate($this->created_at)->toString(),
        ];
    }
}
