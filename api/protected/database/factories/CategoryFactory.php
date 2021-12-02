<?php

namespace Database\Factories;

use Carbon\Carbon;
use Modules\CategoryPack\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    protected $model = Category::class;

    public function definition(): array
    {
    	return [
    	    'cat_title' => $this->faker->name,
    	    'seo_title' => $this->faker->name,
    	    'cat_slug' => $this->faker->slug,
    	    'created_at' => Carbon::now(),
    	    'updated_at' => Carbon::now(),
    	];
    }
}
