<?php

namespace App\Nova\Resources;

use App\Models\Promoted as Model;
use App\Nova\User;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Sloveniangooner\SearchableSelect\SearchableSelect;

class Promoted extends Resource
{
    public static $model = Model::class;

    public static $search = [
        'id',
    ];

    public function extraFields(Request $request)
    {
        return [
            BelongsTo::make('villa', 'villa', Villa::class)->hideWhenCreating()->hideWhenUpdating(),
            SearchableSelect::make('villa', 'villa_id')->resource(Villa::class)->hideFromIndex()->hideFromDetail(),
        ];
    }
}
