<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('education_details', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('resume_id')->constrained()->cascadeOnDelete();
            $table->string('institution')->nullable();
            $table->string('degree')->nullable();
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->boolean('ongoing')->default(false);
            $table->text('description')->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('education_details');
    }
};
