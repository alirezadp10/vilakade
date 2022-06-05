<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'action',
        'amount',
        'res_num',
        'status',
    ];

    public static $rules = [
        'action'  => ['required'],
        'amount'  => ['required', 'integer', 'gte:1000'],
        'res_num' => ['required'],
        'status'  => ['required'],
    ];

    public const STATUSES = [
        'failed' => 'FAILED',
        'paid'   => 'PAID',
    ];

    public function getStatusAttribute($value)
    {
        return strtolower($value);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function reservation()
    {
        return $this->belongsTo(Reservation::class);
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
}
