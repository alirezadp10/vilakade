<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'from_date',
        'until_date',
        'status',
    ];

    protected $casts = [
        'from_date'  => 'date:Y-m-d',
        'until_date' => 'date:Y-m-d',
    ];

    public static $rules = [
        'from_date'  => ['required', 'date'],
        'until_date' => ['required', 'date'],
        'status'     => ['required', 'in:reserved,canceled,pending'],
    ];

    public const STATES = [
        'reserved' => 'RESERVED',
        'canceled' => 'CANCELED',
        'pending'  => 'PENDING',
    ];

    public function getStateAttribute($value)
    {
        return strtolower($value);
    }

    public function villa()
    {
        return $this->belongsTo(Villa::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function payment()
    {
        return $this->hasMany(Payment::class);
    }
}
