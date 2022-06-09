<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Villa;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Morilog\Jalali\Jalalian;
use Tests\TestCase;

class ReservationTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    function users_can_see_their_past_reserves()
    {
        $this->actingAs($this->createUserHasReservation())
            ->getJson('/api/reserves')
            ->assertOk()
            ->assertJsonCount(2, 'data.past')
            ->assertJsonStructure([
                'data' => [
                    'past' => [
                        [
                            "id",
                            "from_date",
                            "until_date",
                            "cost",
                            "villa" => [
                                "title",
                                "images",
                                "city",
                                "province",
                            ],
                        ]
                    ],
                ],
            ]);
    }

    /**
     * @test
     */
    function users_can_see_their_canceled_reserves()
    {
        $this->actingAs($this->createUserHasReservation())
            ->getJson('/api/reserves')
            ->assertOk()
            ->assertJsonCount(1, 'data.canceled')
            ->assertJsonStructure([
                'data' => [
                    'canceled' => [
                        [
                            "id",
                            "from_date",
                            "until_date",
                            "cost",
                            "villa" => [
                                "title",
                                "images",
                                "city",
                                "province",
                            ],
                        ],
                    ],
                ],
            ]);
    }

    /**
     * @test
     */
    function users_can_see_their_active_reserves()
    {
        $this->actingAs($this->createUserHasReservation())
            ->getJson('/api/reserves')
            ->assertOk()
            ->assertJsonCount(2, 'data.active')
            ->assertJsonStructure([
                'data' => [
                    'active' => [
                        [
                            "id",
                            "from_date",
                            "until_date",
                            "cost",
                            "villa" => [
                                "title",
                                "images",
                                "city",
                                "province",
                            ],
                        ],
                    ],
                ],
            ]);
    }

    /**
     * @test
     */
    function users_only_see_their_travel_history()
    {
        $this->createUserHasReservation();

        $abbasbouazar = User::factory()->create();

        $this->actingAs($abbasbouazar)
            ->getJson('/api/reserves')
            ->assertOk()
            ->assertJsonCount(0, 'data.past')
            ->assertJsonCount(0, 'data.canceled')
            ->assertJsonCount(0, 'data.active');
    }

    /**
     * @test
     */
    function guest_can_not_see_his_travel_history()
    {
        $this->createUserHasReservation();

        $this->getJson('/api/reserves')->assertUnauthorized();
    }

    /**
     * @test
     */
    function guest_can_not_reserve_villa()
    {
        Villa::factory()->create();

        $this->postJson('/api/reserves/1')->assertUnauthorized();
    }

    /**
     * @test
     */
    function users_can_reserve_villa()
    {
        $villa = Villa::factory()->create();

        $abbasbouazar = User::factory()->create();

        $this->actingAs($abbasbouazar)->postJson('/api/reserves/1', [
            'from_date'  => '1401-01-11',
            'until_date' => '1401-01-17',
        ]);

        $villa->refresh();

        $this->assertNotEmpty($villa->reserves);

        $this->assertDatabaseHas('reservations', [
            'from_date'  => (new Jalalian('1401', '01', '11'))->toCarbon()->toDateString(),
            'until_date' => (new Jalalian('1401', '01', '17'))->toCarbon()->toDateString(),
            'status'     => 'PENDING',
        ]);
    }

    /**
     * @test
     */
    function users_can_not_reserve_villa_which_already_reserved()
    {
        $villa = Villa::factory()->create();

        $mohammadiNam = User::factory()->create();

        DB::table('reservations')->insert([
            'from_date'  => '2022-04-09',
            'until_date' => '2022-04-14',
            'status'     => 'RESERVED',
            'user_id'    => $mohammadiNam->id,
            'villa_id'   => $villa->id,
        ]);

        $abbasbouazar = User::factory()->create();

        $this->actingAs($abbasbouazar)->postJson('/api/reserves/1', [
            'from_date'  => '1401-01-18',
            'until_date' => '1401-01-21',
        ])->assertStatus(422);

        $this->assertDatabaseMissing('reservations', [
            'from_date'  => (new Jalalian('1401', '01', '18'))->toCarbon()->toDateString(),
            'until_date' => (new Jalalian('1401', '01', '21'))->toCarbon()->toDateString(),
            'status'     => 'PENDING',
        ]);
    }

    private function createUserHasReservation()
    {
        return User::factory()->hasReserves([
            'from_date'  => today()->subDays(20),
            'until_date' => today()->subDays(18),
            'status'     => 'RESERVED'
        ])->hasReserves([
            'from_date'  => today()->subDays(10),
            'until_date' => today()->subDays(5),
            'status'     => 'RESERVED'
        ])->hasReserves([
            'from_date'  => today()->addDays(8),
            'until_date' => today()->addDays(12),
            'status'     => 'PENDING'
        ])->hasReserves([
            'from_date'  => today()->subDays(12),
            'until_date' => today()->subDays(8),
            'status'     => 'CANCELED'
        ])->hasReserves([
            'from_date'  => today()->addDays(2),
            'until_date' => today()->addDays(5),
            'status'     => 'RESERVED'
        ])->hasReserves([
            'from_date'  => today()->addDays(12),
            'until_date' => today()->addDays(18),
            'status'     => 'RESERVED'
        ])->create();
    }
}