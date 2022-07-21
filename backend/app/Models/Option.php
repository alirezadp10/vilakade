<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
    ];

    public static $rules = [
        'title' => ['required', 'max:50'],
        'type'  => ['required', 'max:50'],
    ];

    public function villas()
    {
        return $this->belongsToMany(Villa::class, 'villas_options');
    }
}
