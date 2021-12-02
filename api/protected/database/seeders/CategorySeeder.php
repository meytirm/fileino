<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\CategoryPack\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::factory(25)->create();
    }
}
