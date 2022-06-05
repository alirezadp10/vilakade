<?php

namespace App\Http\Controllers;

use App\Http\Resources\PaymentResource;
use Symfony\Component\HttpFoundation\Response;

class PaymentController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => __('app.success'),
            'data'    => PaymentResource::collection(auth()->user()->payments),
        ], Response::HTTP_OK);
    }
}
