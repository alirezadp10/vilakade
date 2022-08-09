<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Symfony\Component\HttpFoundation\Response;

class CategoryController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => __('app.success'),
            'data'    => CategoryResource::collection(Category::all()),
        ], Response::HTTP_OK);
    }
}
