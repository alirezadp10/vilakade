<?php

namespace App\Nova\Resources;

use App\Models\Option as Model;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;

class Option extends Resource
{
    public static $model = Model::class;

    public static $search = [
        'id', 'title', 'type'
    ];

    public function extraFields(Request $request)
    {
        return [
            Select::make('type')
                ->sortable()
                ->options([
                    'امکانات رفاهی'    => 'امکانات رفاهی',
                    'امکانات سرگرمی'   => 'امکانات سرگرمی',
                    'تجهیزات آشپزخانه' => 'تجهیزات آشپزخانه'
                ])
                ->rules(Model::$rules['type']),

            Text::make('title')->sortable()->rules(Model::$rules['title']),

            BelongsToMany::make('villas', 'villas', Villa::class),
        ];
    }
}
