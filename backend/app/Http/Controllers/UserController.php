<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\Address;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function update(Request $request)
    {
        $user = auth()->user();

        $user->update($request->validate([
            'name'     => User::$rules['name'],
            'birthday' => User::$rules['birthday'],
            'bio'      => User::$rules['bio'],
        ]));

        if ($request->has('avatar')) {
            $user->addMediaFromRequest('avatar')->toMediaCollection('avatar');
        }

        if ($request->has('lovely_cities')) {
            $user->popularCities()->sync($request->lovely_cities);
        }

        if ($request->has(['address.city_id', 'address.description', 'address.telephone'])) {
            $request->validate([
                'address.description' => Address::$rules['description'],
                'address.telephone'   => Address::$rules['telephone'],
            ]);
            $user->address()->create($request->address);
        }

        return response()->json([
            'message' => __('app.success'),
            'data'    => new UserResource($user),
        ], Response::HTTP_OK);
    }
}
