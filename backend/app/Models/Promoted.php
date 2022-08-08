<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Promoted extends Model
{
    protected $table = 'promoted';

    use HasFactory;

    public function villa()
    {
        return $this->belongsTo(Villa::class);
    }
}
