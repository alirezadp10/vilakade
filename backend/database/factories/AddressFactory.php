<?php

namespace Database\Factories;

use App\Models\City;
use App\Models\User;
use App\Models\Villa;
use Illuminate\Database\Eloquent\Factories\Factory;

class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $addressable = $this->addressable();

        return [
            'description'      => $this->faker->address(),
            'city_id'          => City::factory(),
            'addressable_id'   => $addressable::factory(),
            'addressable_type' => $addressable,
        ];
    }

    public function addressable()
    {
        return $this->faker->randomElement([
            User::class,
            Villa::class,
        ]);
    }

}
