<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Notifications\Notification;
use Tests\TestCase;

class NotificationTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    function users_can_view_their_notifications()
    {
        $bouazar = User::factory()->create();

        $bouazar->notify($this->fakeNotification());

        $mohammadiNam = User::factory()->create();

        $mohammadiNam->notify($this->fakeNotification());

        $mohammadiNam->notify($this->fakeNotification());

        $mohammadiNam->notify($this->fakeNotification());

        $this->actingAs($mohammadiNam)->getJson('/api/notifications')->assertOk()->assertJsonStructure([
            'data' => [
                [
                    "id",
                    "type",
                    "title",
                    "body",
                    "read_at",
                    "created_at",
                ],
            ],
        ])->assertJsonCount(3, 'data');
    }

    function fakeNotification()
    {
        return new class extends Notification {
            public function via()
            {
                return ['database'];
            }

            public function toDatabase()
            {
                return ['title' => 'foo', 'body' => 'bar'];
            }
        };
    }
}