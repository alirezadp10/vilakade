<?php

namespace Tests\Feature;

use App\Models\City;
use App\Models\User;
use App\Models\Villa;
use Database\Seeders\CitySeeder;
use Database\Seeders\ProvinceSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CityTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    function users_can_get_cities_list()
    {
        $this->seed([ProvinceSeeder::class, CitySeeder::class]);

        $user = User::factory()->create();

        $response = $this->actingAs($user)->getJson('api/cities');

        $response->assertOk();

        $this->assertCount(City::count(), $response->json('data'));
    }
    
    /**
     * @test
     */
    public function users_can_filter_cities_which_have_villa()
    {
        $this->seed([ProvinceSeeder::class, CitySeeder::class]);

        Villa::factory(6)->create();

        $user = User::factory()->create();

        $response = $this->actingAs($user)->getJson('api/cities?has-villa');

        $response->assertOk();

        $this->assertCount(6, $response->json('data'));
    }
}