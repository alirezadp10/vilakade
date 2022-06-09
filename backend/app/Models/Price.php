<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    use HasFactory;

    protected $fillable = [
        'amount',
        'discount',
        'active',
        'type',
        'date',
    ];

    public static $rules = [
        'amount'   => ['required', 'integer', 'gte:1000'],
        'discount' => ['required', 'integer', 'gte:0', 'lte:100'],
        'type'     => ['required', 'in:typical_day,weekend,special_day'],
        'date'     => ['nullable', 'date'],
        'active'   => ['boolean'],
    ];

    public const TYPES = [
        'typical_day' => 'TYPICAL_DAY',
        'weekend'     => 'WEEKEND',
        'special_day' => 'SPECIAL_DAY',
    ];

    public function villa()
    {
        return $this->belongsTo(Villa::class);
    }

    public function scopeTypicalDay($query)
    {
        return $query->whereType(self::TYPES['typical_day']);
    }

    public function scopeWeekend($query)
    {
        return $query->whereType(self::TYPES['weekend']);
    }
}
