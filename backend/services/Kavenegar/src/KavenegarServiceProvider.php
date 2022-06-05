<?php

namespace Services\Kavenegar;

use Illuminate\Support\Facades\Notification;
use Illuminate\Support\ServiceProvider;
use Services\Kavenegar\Channel\KavenegarChannel;

class KavenegarServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->publishes([__DIR__.'/../config/kavenegar.php' => config_path()], 'kavenegar-config');

        $this->mergeConfigFrom(__DIR__.'/../config/kavenegar.php', 'kavenegar');

        Notification::resolved(function ($service) {
            $service->extend('kavenegar', function () {
                return new KavenegarChannel();
            });
        });
    }
}