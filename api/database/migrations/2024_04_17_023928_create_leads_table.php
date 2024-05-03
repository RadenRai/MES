<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->string('No'); // Menggunakan tipe data string untuk No
            $table->string('Kode Produk');
            $table->string('Nama Produk');
            $table->integer('Total Lead Time');
            $table->string('Dok Production Lead Time'); // Menggunakan tipe data string untuk Dok Production Lead Time
            $table->string('PIC PPC');
            $table->text('Keterangan')->nullable();
            $table->integer('ASSY MH')->nullable();
            $table->integer('ASSY MCH')->nullable();
            $table->integer('Testing MH')->nullable();
            $table->integer('Testing MCH')->nullable();
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
        Schema::dropIfExists('leads');
    }
}
