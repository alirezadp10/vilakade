<?php

namespace Tests\Feature;

use App\Models\User;
use Database\Seeders\CitySeeder;
use Database\Seeders\ProvinceSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Testing\File;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    function users_can_create_account()
    {
        $this->seed([ProvinceSeeder::class, CitySeeder::class]);

        $user = User::factory()->create();

        $response = $this->actingAs($user)->patchJson("api/users/$user->id", [
            'name'          => 'abbas bouazar',
            'lovely_cities' => [3, 8],
            'avatar'        => File::image('image.jpg'),
        ]);

        $response->assertOk();

        $user->refresh();

        $this->assertEquals('abbas bouazar', $user->name);

        $this->assertSame([3, 8], $user->popularCities->pluck('id')->toArray());

        $this->assertEquals(
            '/storage/user/1/conversions/'.md5('image'.config('app.key')).'-thumb.jpg',
            $response->json('data.avatar')
        );

        Storage::disk('public')->assertExists('user/1/'.md5('image'.config('app.key')).'.jpg');
    }

    /**
     * @test
     */
    function users_can_complete_his_profile()
    {
        $this->seed([ProvinceSeeder::class, CitySeeder::class]);

        $user = User::factory()->create();

        $response = $this->actingAs($user)->patchJson("api/users/$user->id", [
            'name'     => 'mohammadi nam',
            'avatar'   => File::image('image.jpg'),
            'bio'      => 'my bio',
            'birthday' => '1996-03-13',
            'address'  => [
                'description' => 'tehran mahalat',
                'telephone'   => '02133526080',
                'city_id'     => 21,
            ],
        ]);

        $response->assertOk();

        $user->refresh();

        $this->assertEquals('mohammadi nam', $user->name);

        $this->assertEquals('my bio', $user->bio);

        $this->assertEquals('1996-03-13', $user->birthday->toDateString());

        $this->assertEquals('02133526080', $user->address()->first()->telephone);

        $this->assertEquals('tehran mahalat', $user->address()->first()->description);

        $this->assertEquals(
            '/storage/user/1/conversions/'.md5('image'.config('app.key')).'-thumb.jpg',
            $response->json('data.avatar')
        );

        Storage::disk('public')->assertExists('user/1/'.md5('image'.config('app.key')).'.jpg');
    }
}