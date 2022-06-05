<?php

namespace Database\Factories;

use App\Models\Payment;
use App\Models\Reservation;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PaymentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'action'         => $this->faker->text(10),
            'amount'         => $this->faker->numberBetween(1000, 10000),
            'res_num'        => $this->faker->numberBetween(1000, 10000),
            'status'         => $this->faker->randomElement(array_values(Payment::STATUSES)),
            'user_id'        => User::factory(),
            'reservation_id' => Reservation::factory(),
        ];
    }
}
