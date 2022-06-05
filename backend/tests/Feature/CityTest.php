<?php

namespace Tests\Feature;

use App\Models\City;
use App\Models\User;
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

        $this->assertEquals(City::count(), count($response->json('data')));
    }
}