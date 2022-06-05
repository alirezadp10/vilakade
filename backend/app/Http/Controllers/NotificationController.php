<?php

namespace App\Http\Controllers;

use App\Http\Resources\NotificationResource;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class NotificationController extends Controller
{
    public function index(Request $request)
    {
        $notifs = $request->has('unread') ? auth()->user()->unreadNotifications : auth()->user()->notifications;

        return response()->json([
            'message' => __('app.success'),
            'data'    => NotificationResource::collection($notifs),
        ], Response::HTTP_OK);
    }
}
