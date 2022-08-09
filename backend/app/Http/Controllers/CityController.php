<?php

namespace App\Http\Controllers;

use App\Filters\CityFilter;
use App\Http\Resources\CityResource;
use App\Models\City;
use Symfony\Component\HttpFoundation\Response;

class CityController extends Controller
{
    public function index(CityFilter $filters)
    {
        return response()->json([
            'message' => __('app.success'),
            'data'    => new CityResource(City::filter($filters)->get()),
        ], Response::HTTP_OK);
    }
}
