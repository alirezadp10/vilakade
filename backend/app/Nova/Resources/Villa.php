<?php

namespace App\Nova\Resources;

use App\Models\Villa as Model;
use App\Nova\Actions\DiscountAction;
use App\Nova\Filters\Villa\VillaCapacityFilter;
use App\Nova\Filters\Villa\VillaCityFilter;
use App\Nova\Filters\Villa\VillaOwnerFilter;
use App\Nova\Filters\Villa\VillaPriceFilter;
use App\Nova\Filters\Villa\VillaRateFilter;
use App\Nova\Filters\Villa\VillaRoomFilter;
use App\Nova\Filters\Villa\VillaTitleFilter;
use App\Nova\Filters\Villa\VillaTypeFilter;
use App\Nova\Metrics\VillaCount;
use App\Nova\Metrics\VillaPriceAvg;
use App\Nova\Metrics\VillasPerType;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\MorphOne;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Silvanite\NovaFieldCheckboxes\Checkboxes;
use Sloveniangooner\SearchableSelect\SearchableSelect;

class Villa extends Resource
{
    public static $model = Model::class;

    public static $search = [
        'id',
        'title',
        'type',
    ];

    private $options = [
        'امکانات رفاهی'    => 'welfareAmenitiesOption',
        'امکانات سرگرمی'   => 'entertainmentFacilitiesOption',
        'تجهیزات آشپزخانه' => 'kitchenAppliancesOption'
    ];

    public function extraFields(Request $request)
    {
        $fields = [
            Text::make('عنوان', 'title')->sortable()->rules(Model::$rules['title']),

            BelongsTo::make('مالک', 'owner', User::class)->hideWhenCreating()->hideWhenUpdating(),

            Number::make('قیمت', 'price')->sortable()->rules(Model::$rules['price']),

            Number::make('تخفیف', 'discount')->sortable()->displayUsing(fn($v) => $v.'%'),

            Number::make('تعداد اتاق ها', 'rooms')->sortable()->rules(Model::$rules['rooms']),

            Number::make('ظرفیت (نفر)', 'capacity')->sortable()->rules(Model::$rules['capacity']),

            Boolean::make('تحویل فوری', 'instant_delivery')
                ->sortable()
                ->rules(Model::$rules['instant_delivery'])
                ->hideFromIndex(),

            Number::make('مساحت (متر مربع)', 'area')->sortable()->rules(Model::$rules['area'])->hideFromIndex(),

            Number::make('زیر بنا (متر مربع)', 'foundation')
                ->sortable()
                ->rules(Model::$rules['foundation'])
                ->hideFromIndex(),

            Select::make('نوع', 'type')
                ->sortable()
                ->rules(Model::$rules['type'])
                ->options(array_map(fn($item) => __('app.'.strtolower($item)), Model::TYPES))
                ->displayUsing(fn($item) => __('app.'.strtolower($item))),

            Number::make('امتیاز', 'rate')->sortable()->rules(Model::$rules['rate']),

            Images::make('تصاویر', 'images')
                ->hideFromIndex()
                ->conversionOnDetailView('thumb')
                ->conversionOnForm('thumb')
                ->fullSize()
                ->rules('required', 'max:20')
                ->customPropertiesFields([Text::make('alt'), Number::make('priority')])
                ->setFileName(fn($originalFilename, $extension, $model) => md5($originalFilename).'.'.$extension),

            SearchableSelect::make('شناسه ی مالک', 'user_id')
                ->default(auth()->id())
                ->resource(User::class)
                ->hideFromIndex()
                ->hideFromDetail(),

            MorphOne::make('address', 'address', Address::class),

//            HasMany::make('reserves', 'reserves', Reservation::class),

        ];

        $fields = array_merge($fields, $this->categoryField());

        return array_merge($fields, $this->optionFields());
    }

    public function extraActions(Request $request)
    {
        return [
            new DiscountAction()
        ];
    }

    public function extraFilters(Request $request)
    {
        return [
            new VillaTitleFilter(),
            new VillaTypeFilter(),
            new VillaOwnerFilter(),
            new VillaCityFilter(),
            new VillaRoomFilter(),
            new VillaPriceFilter(),
            new VillaRateFilter(),
            new VillaCapacityFilter(),
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

    private function optionFields()
    {
        $optionFields = [];

        $options = \App\Models\Option::all()
            ->mapToGroups(fn($item, $key) => [$item['type'] => $item['title']])
            ->toArray();

        foreach ($options as $type => $titles) {
            $optionFields[] = Checkboxes::make($type, $this->options[$type])
                ->options(array_combine($titles, $titles))
                ->columns(3)
                ->hideFromIndex();
        }

        return $optionFields;
    }

    private function categoryField()
    {
        $categoryField = [];

        $categories = \App\Models\Category::all()->pluck('title')->toArray();

        $categoryField[] = Checkboxes::make('دسته بندی', 'category')
            ->options(array_combine($categories, $categories))
            ->columns(3)
            ->hideFromIndex();

        return $categoryField;
    }
}
