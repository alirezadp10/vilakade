<?php

namespace Database\Factories;

use App\Models\Payment;
use Illuminate\Database\Eloquent\Factories\Factory;

class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'state'      => $this->faker->text(10),
            'state_code' => $this->faker->randomDigit(),
            'res_num'    => $this->faker->randomDigit(),
            'ref_num'    => $this->faker->randomDigit(),
            'cid'        => $this->faker->randomDigit(),
            'trace_no'   => $this->faker->randomDigit(),
            'secure_pan' => $this->faker->text(10),
            'payment_id' => Payment::factory(),
        ];
    }
}
