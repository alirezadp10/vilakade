<?php

namespace App\Filters;

use App\Models\Reservation;
use Morilog\Jalali\Jalalian;

class VillaFilter extends Filters
{
    protected array $filters = [
        'type',
        'price',
        'capacity',
        'rooms',
        'city',
        'discount',
        'category',
        'empty',
        'instant-delivery',
        'promoted',
    ];

    protected function rooms($rooms)
    {
        return $this->builder->whereIn('rooms', explode(',', $rooms));
    }

    protected function capacity($capacities)
    {
        return $this->builder->whereIn('capacity', explode(',', $capacities));
    }

    protected function type($types)
    {
        return $this->builder->whereIn('type', explode(',', $types));
    }

    protected function price($price)
    {
        return $this->builder->whereBetween('price', explode(',', $price))
            ->orWhereRaw(
                'price * ( 1 - discount * 0.01 ) BETWEEN ? AND ?',
                array_map('intval', explode(',', $price))
            );
    }

    protected function city($cities)
    {
        return $this->builder->whereHas('address', function ($q) use ($cities) {
            return $q->whereIn('city_id', explode(',', $cities));
        });
    }

    protected function discount()
    {
        return $this->builder->where('discount', '!=', 0);
    }

    protected function category($categories)
    {
        return $this->builder->whereHas('categories', function ($q) use ($categories) {
            return $q->whereIn('title', explode(',', $categories));
        });
    }

    protected function empty($times)
    {
        return $this->builder->whereDoesntHave('reserves', function ($q) use ($times) {
            [$from, $until] = explode(',', $times);

            $from = Jalalian::fromFormat('Y-m-d', $from)->toCarbon()->toDateString();

            $until = Jalalian::fromFormat('Y-m-d', $until)->toCarbon()->toDateString();

            return $q->where('status', Reservation::STATES['reserved'])
                ->whereBetween('from_date', [$from, $until])
                ->orWhereBetween('until_date', [$from, $until]);
        });
    }

    protected function instantDelivery()
    {
        return $this->builder->where('instant_delivery', true);
    }

    protected function promoted()
    {
        return $this->builder->whereHas('promoted');
    }
}