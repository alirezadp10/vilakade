<?php

namespace App\Nova\Resources;

use App\Models\City as Model;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\Text;

class City extends Resource
{
    public static $model = Model::class;

    public static $search = [
        'id', 'name',
    ];

    public function extraFields(Request $request)
    {
        return [
            Text::make('name')->sortable()->rules(Model::$rules['name']),

            BelongsTo::make('province', 'province', Province::class),

            HasMany::make('addresses', 'addresses', Address::class),

            BelongsToMany::make('enthusiasts', 'enthusiasts', User::class),
        ];
    }
}
