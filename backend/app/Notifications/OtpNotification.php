<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Log;

class OtpNotification extends Notification implements ShouldQueue
{
    use Queueable;

    private $otp;

    public function __construct($otp)
    {
        $this->otp = $otp;
    }

    public function via()
    {
        Log::info(__('sms.otp', ['otp' => $this->otp]));

        return app()->environment('local') ? [] : ['kavenegar'];
    }

    public function toKavenegar()
    {
        return __('sms.otp', ['otp' => $this->otp]);
    }
}
