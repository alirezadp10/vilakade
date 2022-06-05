<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NotificationResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            "id"         => $this->id,
            "type"       => $this->type,
            "title"      => $this->data['title'] ?? '',
            "body"       => $this->data['body'] ?? '',
            "read_at"    => $this->read_at,
            'created_at' => jdate($this->created_at)->toString(),
        ];
    }
}
