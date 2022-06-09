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
        $fromDate = Jalalian::fromFormat('Y-m-d', $request->from_date)->toCarbon()->toDateString();
        $untilDate = Jalalian::fromFormat('Y-m-d', $request->until_date)->toCarbon()->toDateString();

        $exist = Reservation::whereStatus(Reservation::STATES['reserved'])
            ->whereBetween('from_date', [$fromDate, $untilDate])
            ->orWhereBetween('until_date', [$fromDate, $untilDate])
            ->exists();

        abort_if($exist, 422, 'این مکان قبلا رزرو شده است.');

        $reservation = Reservation::forceCreate([
            'from_date'  => $fromDate,
            'until_date' => $untilDate,
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
