<?php

namespace Database\Factories;

use App\Models\Villa;
use Illuminate\Database\Eloquent\Factories\Factory;

class PromotedFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'villa_id' => Villa::factory(),
        ];
    }
}
