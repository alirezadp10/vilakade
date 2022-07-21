<?php

namespace App\Nova\Actions;

use App\Models\Villa;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Collection;
use Laravel\Nova\Actions\Action;
use Laravel\Nova\Fields\ActionFields;
use Laravel\Nova\Fields\Number;

class DiscountAction extends Action
{
    use InteractsWithQueue, Queueable;

    public function handle(ActionFields $fields, Collection $models)
    {
        Villa::whereIn('id', $models->pluck('id'))->update([
            'discount' => $fields->discount
        ]);
    }

    public function fields()
    {
        return [
            Number::make('discount')->rules(Villa::$rules['discount'])
        ];
    }
}
