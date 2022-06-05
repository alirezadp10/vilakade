<?php

namespace Database\Factories;

use App\Models\Reservation;
use App\Models\User;
use App\Models\Villa;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReservationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'from_date'  => $this->faker->date(),
            'until_date' => $this->faker->date(),
            'status'     => $this->faker->randomElement(array_values(Reservation::STATES)),
            'user_id'    => User::factory(),
            'villa_id'   => Villa::factory(),
        ];
    }
}
