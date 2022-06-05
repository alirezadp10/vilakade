<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\OtpNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function otp(Request $request)
    {
        $request->validate(User::$rules);

        $user = tap(User::firstOrCreate(['mobile' => $request->mobile]))->update([
            'otp'           => Hash::make($otp = rand(10000, 99999)),
            'otp_issued_at' => now(),
        ]);

        $user->notify(new OtpNotification($otp));

        return response()->json([
            'message' => __('auth.success', ['mobile' => $request->mobile]),
        ], Response::HTTP_CREATED);
    }

    public function verify(Request $request)
    {
        $request->validate([
            'mobile' => 'required',
            'otp'    => 'required',
        ]);

        $user = User::where('mobile', $request->mobile)->first();

        if (!$user || !$user->check($request->otp)) {
            throw ValidationException::withMessages([
                'otp' => __('auth.failed'),
            ]);
        }

        return $user->createToken($request->mobile);
    }
}
