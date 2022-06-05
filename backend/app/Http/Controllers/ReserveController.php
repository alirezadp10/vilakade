<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReservationResource;
use App\Models\Reservation;
use App\Models\Villa;
use Illuminate\Http\Request;
use Morilog\Jalali\Jalalian;
use Symfony\Component\HttpFoundation\Response;

class ReserveController extends Controller
{
    public function index()
    {
        $data = [];

        foreach (auth()->user()->reserves as $reserve){
            if ($reserve->status === Reservation::STATES['reserved'] and $reserve->until_date < today()) {
                $data['past'][] = $reserve;
            }

            if ($reserve->status === Reservation::STATES['canceled']) {
                $data['canceled'][] = $reserve;
            }

            if ($reserve->status === Reservation::STATES['reserved'] and $reserve->from_date >= today()) {
                $data['active'][] = $reserve;
            }
        }

        return response()->json([
            'message' => __('app.success'),
            'data'    => [
                'past'     => ReservationResource::collection($data['past'] ?? []),
                'canceled' => ReservationResource::collection($data['canceled'] ?? []),
                'active'   => ReservationResource::collection($data['active'] ?? []),
            ],
        ], Response::HTTP_OK);
    }

    public function store(Request $request, Villa $villa)
    {
        $reservation = Reservation::forceCreate([
            'from_date'  => (new Jalalian(...explode('-', $request->from_date)))->toCarbon()->toDateTimeString(),
            'until_date' => (new Jalalian(...explode('-', $request->until_date)))->toCarbon()->toDateTimeString(),
            'status'     => Reservation::STATES['pending'],
            'villa_id'   => $villa->id,
            'user_id'    => auth()->id(),
        ]);

        return response()->json([
            'message' => __('app.success'),
            'data'    => ReservationResource::make($reservation),
        ], Response::HTTP_CREATED);
    }
}
