<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::insert([
            ['title' => 'آپارتمان', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'ویلایی', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'کلبه', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'سوئیت', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'باغ', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'مناسب برای جشن و میهمانی', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'مناسب برای ماه‌عسل', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'مناسب برای آرامش', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'مناسب برای لاکچری بازان', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'اسکان های اقتصادی', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'جنگلی', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'استخردار', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
