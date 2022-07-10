<?php

namespace App\Nova\Resources;

use App\Models\Admin as Model;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Password;

class Admin extends Resource
{
    public static $model = Model::class;

    public function extraFields(Request $request)
    {
        return [
            Password::make('password')->hideFromIndex()->rules(Model::$rules['password']),

            BelongsTo::make('user', 'user', User::class),
        ];
    }
}
