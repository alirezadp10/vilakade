<?php

namespace Services\Kavenegar\Channel;

use Illuminate\Support\Facades\Http;

class KavenegarChannel
{
    public function send($notifiable, $notification)
    {
        $message = $notification->toKavenegar($notifiable);

        $apiKey = config('kavenegar.apikey');

        $query = http_build_query([
            'sender'   => config('kavenegar.sender'),
            'receptor' => $notifiable->mobile,
            'message'  => $message,
        ]);

        return Http::post(
            "https://api.kavenegar.com/v1/$apiKey/sms/send.json?".$query
        );
    }
}
