<?php

namespace App\Http\Controllers;

use App\Http\Resources\CityResource;
use App\Models\City;
use Symfony\Component\HttpFoundation\Response;

class CityController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => __('app.success'),
            'data'    => new CityResource(City::all()),
        ], Response::HTTP_OK);
    }
}
