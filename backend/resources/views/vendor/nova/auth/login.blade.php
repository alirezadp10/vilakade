@extends('nova::auth.layout')

@section('content')

    @include('nova::auth.partials.header')

    <form
            class="bg-white shadow rounded-lg p-8 max-w-login mx-auto"
            method="POST"
            id="login-form"
            action="{{ route('nova.login') }}"
    >
        {{ csrf_field() }}

        @component('nova::auth.partials.heading')
            {{ __('Welcome Back!') }}
        @endcomponent

        @if ($errors->any())
            <p class="text-center font-semibold text-danger my-3">
                @if ($errors->has('mobile'))
                    {{ $errors->first('mobile') }}
                @else
                    {{ $errors->first('password') }}
                @endif
            </p>
        @endif

        <div class="mb-6 {{ $errors->has('mobile') ? ' has-error' : '' }}">
            <label class="block font-bold mb-2"
                   for="mobile">{{ __('Mobile') }}</label>
            <input class="form-control form-input form-input-bordered w-full"
                   id="mobile"
                   type="text"
                   name="mobile"
                   value="{{ old('mobile') }}"
                   required
                   autofocus>
        </div>

        <div class="mb-6 {{ $errors->has('password') ? ' has-error' : '' }}">
            <label class="block font-bold mb-2"
                   for="password">{{ __('Password') }}</label>
            <input class="form-control form-input form-input-bordered w-full"
                   id="password"
                   type="password"
                   name="password"
                   required>
        </div>

        <div class="flex mb-6">
            <label class="flex items-center text-xl font-bold">
                <input class=""
                       type="checkbox"
                       name="remember" {{ old('remember') ? 'checked' : '' }}>
                <span class="text-base ml-2">{{ __('Remember Me') }}</span>
            </label>


            @if (\Laravel\Nova\Nova::resetsPasswords())
                <div class="ml-auto">
                    <a class="text-primary dim font-bold no-underline"
                       href="{{ route('nova.password.request') }}">
                        {{ __('Forgot Your Password?') }}
                    </a>
                </div>
            @endif
        </div>

        <button class="g-recaptcha w-full btn btn-default btn-primary hover:bg-primary-dark"
                data-sitekey="{{ config('captcha.sitekey') }}"
                data-callback='onSubmit'
                data-action='submit'
                type="submit">
            {{ __('Login') }}
        </button>

    </form>
@endsection

@section('js')
    <script src="https://www.google.com/recaptcha/api.js"></script>
    <script>
        function onSubmit(token) {
            document.getElementById("login-form").submit();
        }
    </script>
@endsection