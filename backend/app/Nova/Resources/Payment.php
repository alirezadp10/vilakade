<?php

namespace App\Nova\Resources;

use App\Models\Payment as Model;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;

class Payment extends Resource
{
    public static $model = Model::class;

    public static $search = [
        'id', 'amount', 'res_num', 'status',
    ];

    public static function authorizedToCreate(Request $request)
    {
        return false;
    }

    public static function availableForNavigation(Request $request)
    {
        return false;
    }

    public function extraFields(Request $request)
    {
        return [
            Text::make('action')->sortable()->rules(Model::$rules['action']),

            Number::make('amount')->sortable()->rules(Model::$rules['amount']),

            Text::make('res num')->sortable()->rules(Model::$rules['res_num']),

            Select::make('status')->options(array_map(function ($item) {
                return __('app.'.strtolower($item));
            }, Model::STATUSES))->sortable()->rules(Model::$rules['status']),

            BelongsTo::make('user', 'user', User::class),

            BelongsTo::make('reservation', 'reservation', Reservation::class),

            HasMany::make('transactions', 'transactions', Transaction::class),
        ];
    }

    public function authorizedToUpdate(Request $request)
    {
        return false;
    }
}
