<?php

namespace Database\Factories;

use App\Models\Address;
use App\Models\User;
use App\Models\Villa;
use Illuminate\Database\Eloquent\Factories\Factory;

class VillaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title'      => $this->faker->text(20),
            'rooms'      => $this->faker->numberBetween(0, 20),
            'capacity'   => $this->faker->numberBetween(0, 1000),
            'area'       => $this->faker->numberBetween(10, 100000),
            'foundation' => $this->faker->numberBetween(10, 100000),
            'type'       => $this->faker->randomElement(array_values(Villa::TYPES)),
            'rate'       => $this->faker->numberBetween(0, 5),
            'user_id'    => User::factory(),
            'price'      => $this->faker->numberBetween(1000, 10000),
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (Villa $villa) {
            Address::factory()->for($villa, 'addressable')->create();
            $villa->addMediaFromStream('image')->toMediaCollection('images');
        });
    }
}
