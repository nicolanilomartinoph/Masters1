<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMusicTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('music', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('genre'); // enums of genre MAYBE NEEDED

            $table->string('composer'); //list of person NEEDED
            $table->string('performer'); //list of person NEEDED
            $table->string('arranger'); //list of person NEEDED

            $table->timestamp('acquired_on');

            // Will be needed on the technical detail of the music
            //$table->integer('duration');
            //$table->bigInteger('samples');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('music');
    }
}
