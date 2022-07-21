<?php

namespace App\Nova\Resources;

use App\Models\Address as Model;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;

class Address extends Resource
{
    public static $model = Model::class;

    public static $search = [
        'id', 'telephone'
    ];

    public function extraFields(Request $request)
    {
        return [
            Text::make('telephone')->rules(Model::$rules['telephone']),

            Textarea::make('description')->rules(Model::$rules['description']),

            BelongsTo::make('city', 'city', City::class),
        ];
    }
}
