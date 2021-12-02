<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->smallIncrements('id')->unsigned();
            $table->string('cat_title','100');
            $table->string('seo_title','100')->nullable();
            $table->string('seo_meta','157')->nullable();
            $table->string('keywords','100')->nullable();
            $table->string('cat_slug','100')->nullable();
            $table->text('description')->nullable();
            $table->unsignedSmallInteger('parent_id')->nullable();
            $table->unsignedTinyInteger('cat_type')->default(1);
            $table->string('image',100)->nullable();
            $table->boolean('has_slider')->default(0);
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('parent_id')->references('id')->on('categories')
                ->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
}
