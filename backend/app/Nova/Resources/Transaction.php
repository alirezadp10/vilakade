<?php

namespace App\Nova\Resources;

use App\Models\Transaction as Model;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Text;

class Transaction extends Resource
{
    public static $model = Model::class;

    public static $search = [
        'id', 'state', 'state_code', 'res_num', 'ref_num', 'cid', 'trace_no', 'secure_pan',
    ];

    public static function authorizedToCreate(Request $request)
    {
        return false;
    }

    public static function availableForNavigation(Request $request)
    {
        return false;
    }

    public function extraFields(Request $request)
    {
        return [
            Text::make('state')->sortable(),

            Text::make('state code')->sortable(),

            Text::make('res num')->sortable(),

            Text::make('ref num')->sortable(),

            Text::make('cid')->sortable(),

            Text::make('trace no')->sortable(),

            Text::make('secure pan')->sortable(),

            BelongsTo::make('payment', 'payment', Payment::class),
        ];
    }

    public function authorizedToUpdate(Request $request)
    {
        return false;
    }
}
