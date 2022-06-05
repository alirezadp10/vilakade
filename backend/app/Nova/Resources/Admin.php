<?php

namespace App\Nova\Resources;

use App\Models\Admin as Model;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Password;

class Admin extends Resource
{
    public static $model = Model::class;

    public function fields(Request $request)
    {
        return [
            ID::make()->sortable(),
            Password::make('password')->hideFromIndex()->rules(Model::$rules['password']),
            DateTime::make('updated at')->hideWhenCreating()->hideWhenUpdating()->default(now())->sortable()->displayUsing(function ($value) {
                return jdate($value)->toString();
            }),
            DateTime::make('created at')->hideWhenCreating()->hideWhenUpdating()->default(now())->hideFromIndex()->displayUsing(function ($value) {
                return jdate($value)->toString();
            }),

            BelongsTo::make('user', 'user', User::class),
        ];
    }
}
