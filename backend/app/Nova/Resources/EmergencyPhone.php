<?php

namespace App\Nova\Resources;

use App\Models\EmergencyPhone as Model;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Text;

class EmergencyPhone extends Resource
{
    public static $model = Model::class;

    public static $search = [
        'id', 'name',
    ];

    public function extraFields(Request $request)
    {
        return [
            Text::make('number')->sortable()->rules(Model::$rules['number']),

            BelongsTo::make('user', 'user', User::class),
        ];
    }
}
