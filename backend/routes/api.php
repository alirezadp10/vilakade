<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ReserveController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VillaController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/otp', [AuthController::class, 'otp'])->middleware('throttle:1,1,otp');

Route::post('/verify', [AuthController::class, 'verify']);

Route::get('/cities', [CityController::class, 'index'])->name('cities.index');

Route::get('/villas', [VillaController::class, 'index'])->name('villas.index');

Route::get('/villas/{villa}', [VillaController::class, 'show'])->name('villas.show');

Route::group(['middleware' => 'auth:sanctum'], function () {

    Route::patch('/users/{user}', [UserController::class, 'update'])->name('users.update');

    Route::get('/reserves', [ReserveController::class, 'index'])->name('reserves.index');

    Route::post('/reserves/{villa}', [ReserveController::class, 'store'])->name('reserves.store');

    Route::get('/payments', [PaymentController::class, 'index'])->name('payments.index');

    Route::get('/notifications', [NotificationController::class, 'index'])->name('notifications.index');

    Route::get('/notifications', [NotificationController::class, 'index'])->name('notifications.index');

});

