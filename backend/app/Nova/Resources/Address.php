<?php

namespace App\Nova\Resources;

use App\Models\Address as Model;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\MorphTo;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;

class Address extends Resource
{
    public static $model = Model::class;

    public static $search = [
        'id', 'telephone'
    ];

    public function fields(Request $request)
    {
        return [
            ID::make()->sortable(),
            Text::make('telephone')->rules(Model::$rules['telephone']),
            Textarea::make('description')->rules(Model::$rules['description']),
            DateTime::make('updated at')->hideWhenCreating()->hideWhenUpdating()->default(now())->sortable()->displayUsing(function ($value) {
                return jdate($value)->toString();
            }),
            DateTime::make('created at')->hideWhenCreating()->hideWhenUpdating()->default(now())->hideFromIndex()->displayUsing(function ($value) {
                return jdate($value)->toString();
            }),

            BelongsTo::make('city', 'city', City::class),
        ];
    }
}
