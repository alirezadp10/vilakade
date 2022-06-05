<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVillasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('villas', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->integer('rooms')->index();
            $table->integer('capacity')->index();
            $table->integer('area');
            $table->integer('foundation');
            $table->string('type');
            $table->integer('rate')->nullable();
            $table->boolean('instant_delivery')->default(false);
            $table->integer('price');
            $table->integer('discount')->default(0);
            $table->foreignId('user_id')->constrained('users')->cascadeOnUpdate()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('villas');
    }
}
