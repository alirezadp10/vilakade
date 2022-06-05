<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
    ];

    public static $rules = [
        'title' => ['required', 'max:50'],
    ];

    public function villas()
    {
        return $this->belongsToMany(Villa::class, 'villas_categories');
    }
}
