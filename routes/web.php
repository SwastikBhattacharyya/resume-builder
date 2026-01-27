<?php

use App\Http\Controllers\ContactDetail\ContactDetailController;
use App\Http\Controllers\EducationDetail\EducationDetailController;
use App\Http\Controllers\PersonalDetail\PersonalDetailController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('index');
});

Route::resource('personal-details', PersonalDetailController::class)->only(['update']);
Route::resource('contact-details', ContactDetailController::class)->only(['update']);
Route::resource('education-details', EducationDetailController::class)->only(['store', 'update', 'destroy']);
