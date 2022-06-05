<?php

namespace App\Nova\Resources;

use App\Models\Transaction as Model;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;

class Transaction extends Resource
{
    public static $model = Model::class;

    public static $search = [
        'id', 'state', 'state_code', 'res_num', 'ref_num', 'cid', 'trace_no', 'secure_pan',
    ];

    public function fields(Request $request)
    {
        return [
            ID::make()->sortable(),
            Text::make('state')->sortable(),
            Text::make('state code')->sortable(),
            Text::make('res num')->sortable(),
            Text::make('ref num')->sortable(),
            Text::make('cid')->sortable(),
            Text::make('trace no')->sortable(),
            Text::make('secure pan')->sortable(),
            DateTime::make('updated at')->hideWhenCreating()->hideWhenUpdating()->sortable()->displayUsing(function ($value) {
                return jdate($value)->toString();
            }),
            DateTime::make('created at')->hideWhenCreating()->hideWhenUpdating()->hideFromIndex()->displayUsing(function ($value) {
                return jdate($value)->toString();
            }),

            BelongsTo::make('payment', 'payment', Payment::class),
        ];
    }

    public static function authorizedToCreate(Request $request)
    {
        return false;
    }

    public function authorizedToUpdate(Request $request)
    {
        return false;
    }
}
