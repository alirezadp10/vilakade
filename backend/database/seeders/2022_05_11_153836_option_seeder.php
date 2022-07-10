<?php

namespace Database\Seeders;

use App\Models\Option;
use Illuminate\Database\Seeder;

class OptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Option::insert([
            ['type' => 'تجهیزات آشپزخانه', 'title' => 'ظروف پخت و پز', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'تجهیزات آشپزخانه', 'title' => 'ادویه جات', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'تجهیزات آشپزخانه', 'title' => 'میز ناهار خوری', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'تجهیزات آشپزخانه', 'title' => 'کتری و قوری', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'تجهیزات آشپزخانه', 'title' => 'آبکش', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'تجهیزات آشپزخانه', 'title' => 'یخچال', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'تجهیزات آشپزخانه', 'title' => 'ماکروفر', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'تجهیزات آشپزخانه', 'title' => 'چایی ساز برقی', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'تجهیزات آشپزخانه', 'title' => 'قاشق چنگال', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'تجهیزات آشپزخانه', 'title' => 'کابینت', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'تجهیزات آشپزخانه', 'title' => 'اجاق گاز', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات سرگرمی', 'title' => 'میز بیلیارد', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات سرگرمی', 'title' => 'سالن کنفرانس', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات سرگرمی', 'title' => 'میز پینگ پنگ', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات سرگرمی', 'title' => 'سالن اجتماعات', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات سرگرمی', 'title' => 'فوتبال دستی', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات سرگرمی', 'title' => 'روف گاردن', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات سرگرمی', 'title' => 'سالن ورزشی', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات سرگرمی', 'title' => 'سرسره آبی', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات سرگرمی', 'title' => 'استخر', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات سرگرمی', 'title' => 'کنسول بازی', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'آب', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'برق', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'گاز', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'شومینه', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'لاحاف و تشک', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'تلویزیون', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'گیرنده دیجیتال ایران', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'اتو', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'سشوار', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'جاروبرقی', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'مبلمان', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'صندلی راحتی', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'لابی', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'حیاط', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'بالکن', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'پارکینگ', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'پارکینگ مسقف', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'آسانسور', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'سیستم سرمایشی', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'سیستم گرمایشی', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'کولر گازی', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'پکیج', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'سرویس بهداشتی ایرانی', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'سرویس بهداشتی فرنگی', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'حمام', 'created_at' => now(), 'updated_at' => now()],
            ['type' => 'امکانات رفاهی', 'title' => 'وان حمام', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
