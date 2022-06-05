<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class User extends Authenticatable implements HasMedia
{
    use HasApiTokens, HasFactory, Notifiable, InteractsWithMedia;

    protected $fillable = [
        'name',
        'mobile',
        'birthday',
        'bio',
        'otp',
        'otp_issued_at',
    ];

    protected $hidden = [
        'otp',
        'password',
    ];

    protected $casts = [
        'otp_issued_at' => 'datetime',
        'birthday'      => 'date',
    ];

    protected $dates = [
        'otp_issued_at',
        'birthday',
    ];

    public static $rules = [
        'mobile'        => ['required', 'regex:/^09[0-9]{9}$/'],
        'name'          => ['nullable', 'max:50'],
        'otp'           => ['nullable', 'max:5'],
        'otp_issued_at' => ['nullable', 'date'],
        'birthday'      => ['nullable', 'date'],
        'bio'           => ['nullable', 'max:255'],
    ];

    public function check($otp)
    {
        return Hash::check($otp, $this->otp) && strtotime(now()) - strtotime($this->otp_issued_at) < 60;
    }

    public function admin()
    {
        return $this->hasOne(Admin::class);
    }

    public function getPasswordAttribute()
    {
        return optional($this->admin)->password;
    }

    public function getRememberTokenName()
    {
        return optional($this->admin)->remember_token;
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')->width(130)->height(130);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('avatar');
    }

    public function address()
    {
        return $this->morphOne(Address::class, 'addressable');
    }

    public function villas()
    {
        return $this->hasMany(Villa::class);
    }

    public function reserves()
    {
        return $this->hasMany(Reservation::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function paidReserves()
    {
        return $this->reserves()->whereHas('payment', function (Builder $query) {
            $query->whereStatus(Payment::STATUSES['paid']);
        })->get();
    }

    public function emergencyPhones()
    {
        return $this->hasMany(EmergencyPhone::class);
    }

    public function popularCities()
    {
        return $this->belongsToMany(City::class, 'popular_cities');
    }

    public function receipts()
    {
        return Payment::whereHas('reservation', function ($q) {
            return $q->whereHas('villa', function ($q) {
                return $q->where('user_id', $this->id);
            });
        })->get();
    }
}
