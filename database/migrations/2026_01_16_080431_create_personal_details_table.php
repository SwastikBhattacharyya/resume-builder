<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('personal_details', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('resume_id')->unique()->constrained()->cascadeOnDelete();
            $table->string('full_name')->nullable();
            $table->string('designation')->nullable();
            $table->text('profile')->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('personal_details');
    }
};
