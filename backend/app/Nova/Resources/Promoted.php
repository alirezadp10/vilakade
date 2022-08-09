<?php

namespace App\Nova\Resources;

use App\Models\Promoted as Model;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Text;

class Promoted extends Resource
{
    public static $model = Model::class;

    public static $search = [
        'id',
    ];

    public function extraFields(Request $request)
    {
        return [
            BelongsTo::make('villa', 'villa', Villa::class),
        ];
    }
}
