<?php

namespace Tests\Feature;

use App\Models\Villa;
use Database\Seeders\CitySeeder;
use Database\Seeders\ProvinceSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Morilog\Jalali\Jalalian;
use Tests\TestCase;

class VillaTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    function users_can_fetch_all_villas()
    {
        Villa::factory(10)->create();

        $this->getJson('/api/villas')->assertOk()->assertJsonStructure([
            'data' => [
                [
                    "id",
                    "images",
                    "title",
                    "rooms",
                    "capacity",
                    "area",
                    "foundation",
                    "instant_delivery",
                    "type",
                    "rate",
                    "city",
                    "price",
                    "discount",
                    "created_at",
                ],
            ],
        ])->assertJsonCount(10, 'data');
    }

    /**
     * @test
     */
    function users_can_filter_villas_based_on_their_types()
    {
        Villa::factory(2)->create(['type' => 'foo']);

        Villa::factory(3)->create(['type' => 'bar']);

        $this->getJson('/api/villas?type=foo')->assertJsonCount(2, 'data');
    }

    /**
     * @test
     */
    function users_can_filter_villas_based_on_their_prices()
    {
        Villa::factory(2)->create(['price' => 2000000]);

        Villa::factory(3)->create(['price' => 3000000]);

        Villa::factory(5)->create(['price' => 3500000]);

        Villa::factory(1)->create(['price' => 4000000, 'discount' => 30]);

        $this->getJson('/api/villas?price=1000000,3000000')->assertJsonCount(6, 'data');
    }

    /**
     * @test
     */
    function users_can_filter_villas_based_on_their_capacities()
    {
        Villa::factory(5)->create(['capacity' => 2]);

        Villa::factory(2)->create(['capacity' => 5]);

        Villa::factory(4)->create(['capacity' => 8]);

        $this->getJson('/api/villas?capacity=8,2')->assertJsonCount(9, 'data');
    }

    /**
     * @test
     */
    function users_can_filter_villas_based_on_their_rooms_count()
    {
        Villa::factory(2)->create(['rooms' => 3]);

        Villa::factory(4)->create(['rooms' => 6]);

        $this->getJson('/api/villas?rooms=3')->assertJsonCount(2, 'data');
    }

    /**
     * @test
     */
    function users_can_filter_villas_based_on_cities()
    {
        $this->seed([ProvinceSeeder::class, CitySeeder::class]);

        Villa::factory(4)->hasAddress(['city_id' => 5])->create();

        Villa::factory(2)->hasAddress(['city_id' => 2])->create();

        $this->getJson('/api/villas?city=5')->assertJsonCount(4, 'data');
    }

    /**
     * @test
     */
    function users_can_filter_villas_based_on_discount()
    {
        Villa::factory(2)->create(['discount' => 20]);

        Villa::factory(8)->create();

        $this->getJson('/api/villas?discount')->assertJsonCount(2, 'data');
    }

    /**
     * @test
     */
    function users_can_filter_villas_based_on_their_categories()
    {
        Villa::factory(2)->hasCategories(['title' => 'foo'])->create();

        Villa::factory(5)->hasCategories(['title' => 'bar'])->create();

        Villa::factory(1)->hasCategories(['title' => 'baz'])->create();

        $this->getJson('/api/villas?category=foo,baz')->assertJsonCount(3, 'data');
    }

    /**
     * @test
     */
    function users_can_filter_villas_based_on_their_empty_times()
    {
        Villa::factory(1)->create();

        Villa::factory()->hasReserves([
            'from_date'  => (new Jalalian('1401', '01', '11'))->toCarbon()->toString(),
            'until_date' => (new Jalalian('1401', '01', '14'))->toCarbon()->toString(),
            'status'     => 'RESERVED',
        ])->hasReserves([
            'from_date'  => (new Jalalian('1401', '01', '17'))->toCarbon()->toString(),
            'until_date' => (new Jalalian('1401', '01', '22'))->toCarbon()->toString(),
            'status'     => 'RESERVED',
        ])->create();

        $this->getJson('/api/villas?empty=1401-01-09,1401-01-12')->assertJsonCount(1, 'data');

        $this->getJson('/api/villas?empty=1401-01-09,1401-01-25')->assertJsonCount(1, 'data');

        $this->getJson('/api/villas?empty=1401-01-15,1401-01-16')->assertJsonCount(2, 'data');
    }

    /**
     * @test
     */
    function users_can_filter_villas_based_on_their_delivery()
    {
        Villa::factory(2)->create(['instant_delivery' => true]);

        Villa::factory(5)->create(['instant_delivery' => false]);

        $this->getJson('/api/villas?instant-delivery')->assertJsonCount(2, 'data');
    }

    /**
     * @test
     */
    function users_can_see_villa_details()
    {
        Villa::factory()->hasAddress()->hasCategories()->create();

        $this->getJson('/api/villas/1')->assertJsonStructure([
            'data' => [
                "id",
                "images",
                "categories" => [
                    [
                        'id',
                        'title',
                    ],
                ],
                "title",
                "rooms",
                "capacity",
                "area",
                "foundation",
                "instant_delivery",
                "type",
                "rate",
                "city",
                "price",
                "discount",
                "created_at",
            ],
        ]);
    }
}