<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'state',
        'state_code',
        'res_num',
        'ref_num',
        'cid',
        'trace_no',
        'secure_pan',
    ];

    public function payment()
    {
        return $this->belongsTo(Payment::class);
    }
}
