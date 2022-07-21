<?php

namespace App\Nova\Resources;

use App\Models\Price as Model;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\Date;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Select;

class Price extends Resource
{
    public static $model = Model::class;

    public static $displayInNavigation = false;

    public static $search = [
        'id', 'amount', 'type',
    ];

    public function extraFields(Request $request)
    {
        return [
            Number::make('amount')->sortable()->rules(Model::$rules['amount']),

            Number::make('discount')->sortable()->default(0)->rules(Model::$rules['discount']),

            Boolean::make('active')->sortable()->default(false)->rules(Model::$rules['active']),

            Select::make('type')->sortable()->options(array_map(function ($item) {
                return __('app.'.strtolower($item));
            }, Model::TYPES))->rules(Model::$rules['type']),

            Date::make('date')
                ->sortable()
                ->nullable()
                ->hideFromIndex()
                ->rules(Model::$rules['date'])
                ->displayUsing(function ($value) {
                    return jdate($value)->format('Y-m-d');
                }),

            BelongsTo::make('villa', 'villa', Villa::class),
        ];
    }
}
