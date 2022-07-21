<?php

namespace App\Providers;

use App\Models\User;
use App\Nova\Http\Controllers\LoginController;
use App\Nova\Metrics\UserCount;
use App\Nova\Metrics\UsersPerDay;
use App\Nova\Metrics\VillaCount;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Laravel\Nova\Nova;
use Laravel\Nova\NovaApplicationServiceProvider;

class NovaServiceProvider extends NovaApplicationServiceProvider
{
    public function boot()
    {
        parent::boot();

        Nova::theme('/vendor/css/nova.css');

        Nova::sortResourcesBy(function ($resource) {
            return array_search($resource, $this->priority());
        });

        Nova::createUserUsing($this->createUserCommand(), $this->createUser());

        Nova::serving(function () {
            Config::set('app.locale', 'en');
        });
    }

    protected function createUserCommand()
    {
        return function ($command) {
            return [
                $command->ask('Mobile'),
                $command->secret('Password'),
            ];
        };
    }

    protected function createUser()
    {
        return function ($mobile, $password) {
            $user = User::create([
                'mobile' => $mobile,
            ]);

            $user->admin()->create([
                'password' => Hash::make($password),
            ]);

            return $user;
        };
    }

    protected function priority()
    {
        return [
            \App\Nova\Resources\User::class,
            \App\Nova\Resources\Villa::class,
//            \App\Nova\Resources\Reservation::class,
            \App\Nova\Resources\Category::class,
            \App\Nova\Resources\Option::class,
//            \App\Nova\Resources\Payment::class,
//            \App\Nova\Resources\Transaction::class,
            \App\Nova\Resources\Address::class,
            \App\Nova\Resources\City::class,
            \App\Nova\Resources\Province::class,
            \App\Nova\Resources\EmergencyPhone::class,
            \App\Nova\Resources\Admin::class,
        ];
    }

    protected function routes()
    {
        Nova::routes()->withAuthenticationRoutes()->withPasswordResetRoutes()->register();

        Route::post('api/nova/login', [LoginController::class, 'login'])->middleware('web')->name('nova.login');
    }

    protected function cards()
    {
        return [
            new UserCount(),
            new VillaCount(),
            new UsersPerDay(),
            new \Tightenco\NovaGoogleAnalytics\PageViewsMetric,
            new \Tightenco\NovaGoogleAnalytics\VisitorsMetric,
            new \Tightenco\NovaGoogleAnalytics\OneDayActiveUsersMetric,
            new \Tightenco\NovaGoogleAnalytics\SevenDayActiveUsersMetric,
            new \Tightenco\NovaGoogleAnalytics\SessionsMetric,
            new \Tightenco\NovaGoogleAnalytics\SessionDurationMetric,
            new \Tightenco\NovaGoogleAnalytics\SessionsByDeviceMetric,
            new \Tightenco\NovaGoogleAnalytics\MostVisitedPagesCard,
            new \Tightenco\NovaGoogleAnalytics\ReferrersList,
        ];
    }

    protected function gate()
    {
        Gate::define('viewNova', function ($user) {
            return (bool) $user->admin;
        });
    }

    protected function resources()
    {
        Nova::resourcesIn(app_path('Nova/Resources'));
    }
}
