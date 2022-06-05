<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmergencyPhone extends Model
{
    use HasFactory;

    protected $fillable = [
        'number',
    ];

    public static $rules = [
        'number' => ['required', 'regex:/^0[0-9]{10}$/'],
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
