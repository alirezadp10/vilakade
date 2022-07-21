<?php

namespace App\Nova\Resources;

use App\Models\Category as Model;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\Text;

class Category extends Resource
{
    public static $model = Model::class;

    public static $search = [
        'id', 'title'
    ];

    public function extraFields(Request $request)
    {
        return [
            Text::make('title')->sortable()->rules(Model::$rules['title']),

            BelongsToMany::make('villas', 'villas', Villa::class),
        ];
    }
}
