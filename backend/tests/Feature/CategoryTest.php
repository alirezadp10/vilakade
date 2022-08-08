<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\User;
use Database\Seeders\CategorySeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CategoryTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    function users_can_get_categories_list()
    {
        $this->seed([CategorySeeder::class]);

        $user = User::factory()->create();

        $response = $this->actingAs($user)->getJson('api/categories');

        $response->assertOk();

        $this->assertCount(Category::count(), $response->json('data'));
    }
}