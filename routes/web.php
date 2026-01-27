<?php

use App\Http\Controllers\Achievement\AchievementController;
use App\Http\Controllers\ContactDetail\ContactDetailController;
use App\Http\Controllers\EducationDetail\EducationDetailController;
use App\Http\Controllers\PersonalDetail\PersonalDetailController;
use App\Http\Controllers\Project\ProjectController;
use App\Http\Controllers\Resume\ResumeController;
use App\Http\Controllers\Skill\SkillController;
use App\Http\Controllers\WorkExperience\WorkExperienceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('index');
});

Route::resource('resumes', ResumeController::class)->only(['store']);
Route::resource('personal-details', PersonalDetailController::class)->only(['update']);
Route::resource('contact-details', ContactDetailController::class)->only(['update']);
Route::resource('education-details', EducationDetailController::class)->only(['store', 'update', 'destroy']);
Route::resource('work-experiences', WorkExperienceController::class)->only(['store', 'update', 'destroy']);
Route::resource('projects', ProjectController::class)->only(['store', 'update', 'destroy']);
Route::resource('skills', SkillController::class)->only(['store', 'update', 'destroy']);
Route::resource('achievements', AchievementController::class)->only(['store', 'update', 'destroy']);
