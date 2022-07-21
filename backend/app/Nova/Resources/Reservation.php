<?php

namespace App\Nova\Resources;

use App\Models\Reservation as Model;
use App\Nova\Metrics\ReservationCount;
use App\Nova\Metrics\ReservationsPerDay;
use App\Nova\Metrics\ReservationsPerType;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Date;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\Select;

class Reservation extends Resource
{
    public static $model = Model::class;

    public static $search = [
        'id', 'status',
    ];

    public static function availableForNavigation(Request $request)
    {
        return false;
    }

    public function extraFields(Request $request)
    {
        return [
            Date::make('from date')->sortable()->rules(Model::$rules['from_date'])->displayUsing(function ($value) {
                return jdate($value)->format('Y-m-d');
            }),

            Date::make('until date')->sortable()->rules(Model::$rules['until_date'])->displayUsing(function ($value) {
                return jdate($value)->format('Y-m-d');
            }),

            Select::make('status')->sortable()->options(array_map(function ($item) {
                return __('app.'.strtolower($item));
            }, Model::STATES))->rules(Model::$rules['status']),

            BelongsTo::make('villa', 'villa', Villa::class),

            BelongsTo::make('user', 'user', User::class),

            HasMany::make('payment', 'payment', Payment::class),
        ];
    }

    public function cards(Request $request)
    {
        return [
            new ReservationCount(),
            new ReservationsPerDay(),
            new ReservationsPerType(),
        ];
    }
}
