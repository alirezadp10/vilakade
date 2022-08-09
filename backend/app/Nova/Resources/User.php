<?php

namespace App\Nova\Resources;

use App\Models\User as Model;
use App\Nova\Metrics\UserCount;
use App\Nova\Metrics\UsersPerDay;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\Date;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\MorphMany;
use Laravel\Nova\Fields\MorphOne;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;

class User extends Resource
{
    public static $model = Model::class;

    public static $title = 'mobile';

    public static $search = [
        'id', 'name', 'mobile',
    ];

    public function extraFields(Request $request)
    {
        return [
            Images::make('avatar', 'avatar')
                ->conversionOnDetailView('thumb')
                ->conversionOnIndexView('thumb')
                ->conversionOnForm('thumb')
                ->customPropertiesFields([
                    Text::make('alt'),
                ])
                ->setFileName(function ($originalFilename, $extension, $model) {
                    return md5($originalFilename).'.'.$extension;
                })
                ->fullSize()
                ->rules('nullable', 'max:1'),

            Text::make('name')->sortable()->rules(Model::$rules['name']),

            Text::make('mobile')->sortable()->rules(Model::$rules['mobile']),

            Textarea::make('bio')->hideFromIndex()->rules(Model::$rules['bio']),

            Text::make('otp')->hideFromIndex()->rules(Model::$rules['otp']),

            Date::make('birthday')->hideFromIndex()->rules(Model::$rules['birthday'])->displayUsing(function ($value) {
                return jdate($value)->format('Y-m-d');
            }),

            DateTime::make('otp issued at')
                ->rules(Model::$rules['otp_issued_at'])
                ->hideFromIndex()
                ->displayUsing(function ($value) {
                    return jdate($value)->toString();
                }),

            MorphOne::make('address', 'address', Address::class),

            MorphMany::make('villas', 'villas', Villa::class),

            HasMany::make('reserves', 'reserves', Reservation::class),

            HasMany::make('payments', 'payments', Payment::class),

            HasMany::make('emergency phones', 'emergencyPhones', EmergencyPhone::class),

            BelongsToMany::make('popular cities', 'popularCities', City::class),
        ];
    }

    public function cards(Request $request)
    {
        return [
            (new UserCount())->width('1/2'),
            (new UsersPerDay())->width('1/2'),
        ];
    }

}
