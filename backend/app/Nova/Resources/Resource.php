<?php

namespace App\Nova\Resources;

use App\Nova\Filters\CreatedFromAtFilter;
use App\Nova\Filters\CreatedUntilAtFilter;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Resource as NovaResource;
use Maatwebsite\LaravelNovaExcel\Actions\DownloadExcel;

abstract class Resource extends NovaResource
{
    public static function label()
    {
        return Str::headline(class_basename(get_called_class()));
    }

    public static function indexQuery(NovaRequest $request, $query)
    {
        return $query;
    }

    public static function scoutQuery(NovaRequest $request, $query)
    {
        return $query;
    }

    public static function detailQuery(NovaRequest $request, $query)
    {
        return parent::detailQuery($request, $query);
    }

    public static function relatableQuery(NovaRequest $request, $query)
    {
        return parent::relatableQuery($request, $query);
    }

    public function fields(Request $request)
    {
        $fields = [];

        $fields[] = ID::make()->sortable();

        $fields = array_merge($fields, $this->extraFields($request));

        $fields[] = DateTime::make('updated at')
            ->hideWhenCreating()
            ->hideWhenUpdating()
            ->default(now())
            ->sortable()
            ->displayUsing(function ($value) {
                return jdate($value)->toString();
            });

        $fields[] = DateTime::make('created at')
            ->hideWhenCreating()
            ->hideWhenUpdating()
            ->default(now())
            ->hideFromIndex()
            ->displayUsing(function ($value) {
                return jdate($value)->toString();
            });

        return $fields;
    }

    public function extraFields(Request $request)
    {
        return [];
    }

    public function actions(Request $request)
    {
        return array_merge($this->extraActions($request), [
            (new DownloadExcel())->withHeadings()->allFields(),
        ]);
    }

    public function extraActions(Request $request)
    {
        return [];
    }

    public function filters(Request $request)
    {
        return array_merge($this->extraFilters($request), [
            new CreatedFromAtFilter(),
            new CreatedUntilAtFilter(),
        ]);
    }

    public function extraFilters(Request $request)
    {
        return [];
    }

    public function authorizedToDelete(Request $request)
    {
        return false;
    }
}
