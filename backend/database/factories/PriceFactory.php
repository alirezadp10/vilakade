<?php

namespace Database\Factories;

use App\Models\Price;
use App\Models\Villa;
use Illuminate\Database\Eloquent\Factories\Factory;

class PriceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'amount'   => $this->faker->numberBetween(1000, 10000),
            'type'     => $this->faker->randomElement(array_values(Price::TYPES)),
            'villa_id' => Villa::factory(),
        ];
    }
}
