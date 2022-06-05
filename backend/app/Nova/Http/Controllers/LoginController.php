<?php

namespace App\Nova\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class LoginController extends \Laravel\Nova\Http\Controllers\LoginController
{
    public function username()
    {
        return 'mobile';
    }

    protected function validateLogin(Request $request)
    {
        $request->validate([
            $this->username()      => User::$rules['mobile'],
            'password'             => 'required|string',
            'g-recaptcha-response' => app()->environment('local') ? 'nullable' : 'required|captcha',
        ]);
    }

    protected function attemptLogin(Request $request)
    {
        return $this->guard()->attempt(
            $this->credentials($request), $request->filled('remember')
        );
    }

    protected function credentials(Request $request)
    {
        return $request->only($this->username(), 'password');
    }
}
