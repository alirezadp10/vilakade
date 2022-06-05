<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PaymentTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    function users_can_fetch_their_payments_list()
    {
        User::factory()->hasPayments(2)->create();

        $user = User::factory()->hasPayments(3)->create();

        $this->actingAs($user)->getJson('/api/payments')->assertOk()->assertJsonStructure([
            'data' => [
                [
                    "id",
                    "res_num",
                    "amount",
                    "status",
                    "type",
                    "created_at",
                ],
            ],
        ])->assertJsonCount(3, 'data');
    }
    
    /**
     * @test
     */
    function user_can_pay_reservation()
    {
        $this->assertTrue(true);
    }

    /**
     * @test
     */
    function reservation_will_be_set_to_pending_status_when_a_user_is_in_paying_transaction()
    {
        $this->assertTrue(true);
    }
}