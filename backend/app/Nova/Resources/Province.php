<?php

namespace App\Nova\Resources;

use App\Models\Province as Model;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\Text;

class Province extends Resource
{
    public static $model = Model::class;

    public static $search = [
        'id', 'name',
    ];

    public function extraFields(Request $request)
    {
        return [
            Text::make('name')->sortable()->rules(Model::$rules['name']),

            HasMany::make('cities', 'cities', City::class),
        ];
    }
}
