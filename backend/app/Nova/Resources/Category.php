<?php

namespace App\Nova\Resources;

use App\Models\Category as Model;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;

class Category extends Resource
{
    public static $model = Model::class;

    public static $search = [
        'id', 'title'
    ];

    public function fields(Request $request)
    {
        return [
            ID::make()->sortable(),
            Text::make('title')->sortable()->rules(Model::$rules['title']),
            DateTime::make('updated at')->hideWhenCreating()->hideWhenUpdating()->default(now())->sortable()->displayUsing(function ($value) {
                return jdate($value)->toString();
            }),
            DateTime::make('created at')->hideWhenCreating()->hideWhenUpdating()->default(now())->hideFromIndex()->displayUsing(function ($value) {
                return jdate($value)->toString();
            }),

            BelongsToMany::make('villas', 'villas', Villa::class),
        ];
    }
}
