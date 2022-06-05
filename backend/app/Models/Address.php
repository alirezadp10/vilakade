<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'telephone',
        'city_id',
    ];

    public static $rules = [
        'description' => ['required', 'max:255'],
        'telephone'   => ['nullable', 'regex:/^0[0-9]{10}$/'],
    ];

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function addressable()
    {
        return $this->morphTo();
    }
}
