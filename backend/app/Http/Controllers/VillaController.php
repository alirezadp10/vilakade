<?php

namespace App\Http\Controllers;

use App\Filters\VillaFilter;
use App\Http\Resources\VillaResource;
use App\Models\Villa;
use Symfony\Component\HttpFoundation\Response;

class VillaController extends Controller
{
    public function index(VillaFilter $filters)
    {
        return response()->json([
            'message' => __('app.success'),
            'data'    => VillaResource::collection(Villa::filter($filters)->paginate()),
        ], Response::HTTP_OK);
    }

    public function show(Villa $villa)
    {
        return response()->json([
            'message' => __('app.success'),
            'data'    => VillaResource::make($villa),
        ], Response::HTTP_OK);
    }
}
