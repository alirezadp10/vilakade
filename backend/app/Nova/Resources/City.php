<?php

namespace App\Nova\Resources;

use App\Models\City as Model;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;

class City extends Resource
{
    public static $model = Model::class;

    public static $search = [
        'id', 'name',
    ];

    public function fields(Request $request)
    {
        return [
            ID::make()->sortable(),
            Text::make('name')->sortable()->rules(Model::$rules['name']),
            DateTime::make('updated at')->hideWhenCreating()->hideWhenUpdating()->default(now())->sortable()->displayUsing(function ($value) {
                return jdate($value)->toString();
            }),
            DateTime::make('created at')->hideWhenCreating()->hideWhenUpdating()->default(now())->hideFromIndex()->displayUsing(function ($value) {
                return jdate($value)->toString();
            }),

            BelongsTo::make('province', 'province', Province::class),
            HasMany::make('addresses', 'addresses', Address::class),
            BelongsToMany::make('enthusiasts', 'enthusiasts', User::class),
        ];
    }
}
