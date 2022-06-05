<?php

namespace App\Nova\Resources;

use App\Models\Villa as Model;
use App\Nova\Metrics\VillaCount;
use App\Nova\Metrics\VillaPriceAvg;
use App\Nova\Metrics\VillasPerType;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\MorphOne;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Sloveniangooner\SearchableSelect\SearchableSelect;

class Villa extends Resource
{
    public static $model = Model::class;

    public static $search = [
        'id',
        'title',
        'type',
    ];

    public function fields(Request $request)
    {
        return [
            ID::make()->sortable(),
            Text::make('عنوان', 'title')->sortable()->rules(Model::$rules['title']),
            Number::make('تعداد اتاق ها', 'rooms')->sortable()->rules(Model::$rules['rooms']),
            Number::make('ظرفیت (نفر)', 'capacity')->sortable()->rules(Model::$rules['capacity']),
            Boolean::make('تحویل فوری', 'instant_delivery')->sortable()->rules(Model::$rules['instant_delivery']),
            Number::make('مساحت (متر مربع)', 'area')->sortable()->rules(Model::$rules['area'])->hideFromIndex(),
            Number::make('زیر بنا (متر مربع)', 'foundation')->sortable()->rules(
                Model::$rules['foundation']
            )->hideFromIndex(),
            Select::make('نوع', 'type')->sortable()->options(
                array_map(function ($item) {
                    return __('app.'.strtolower($item));
                }, Model::TYPES)
            )->rules(Model::$rules['type'])->displayUsing(function ($item) {
                return __('app.'.strtolower($item));
            }),
            Number::make('امتیاز (۱ تا ۵)', 'rate')->sortable()->rules(Model::$rules['rate']),
            Images::make('تصاویر', 'images')
                ->hideFromIndex()
                ->conversionOnDetailView('thumb')
                ->conversionOnForm('thumb')
                ->customPropertiesFields([
                    Text::make('alt'),
                    Number::make('priority'),
                ])
                ->setFileName(function ($originalFilename, $extension, $model) {
                    return md5($originalFilename).'.'.$extension;
                })
                ->fullSize()
                ->rules('required', 'max:20'),

            Number::make('مبلغ (تومان)', 'price')->sortable()->rules(Model::$rules['price']),
            Number::make('درصد تخفیف', 'discount')->sortable()->default(0)->rules(Model::$rules['discount']),
            SearchableSelect::make('شناسه ی مالک', 'user_id')->resource(User::class)->hideFromIndex()->hideFromDetail(),
            BelongsTo::make('owner', 'owner', User::class)->hideWhenCreating()->hideWhenUpdating(),
            MorphOne::make('address', 'address', Address::class),
            HasMany::make('reserves', 'reserves', Reservation::class),
            BelongsToMany::make('categories', 'categories', Category::class),

            DateTime::make('updated at')->hideWhenCreating()->hideWhenUpdating()->default(now())->sortable(
            )->displayUsing(function ($value) {
                return jdate($value)->toString();
            }),
            DateTime::make('created at')->hideWhenCreating()->hideWhenUpdating()->default(now())->hideFromIndex(
            )->displayUsing(function ($value) {
                return jdate($value)->toString();
            }),
        ];
    }

    public function cards(Request $request)
    {
        return [
            new VillaCount(),
            new VillasPerType(),
            new VillaPriceAvg(),
        ];
    }
}
