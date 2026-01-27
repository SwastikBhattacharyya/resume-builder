<?php

use App\Models\Resume;
use App\Models\WorkExperience;

test('a work experience can be created', function () {
    $resume = Resume::create([
        'title' => "John Doe's Resume",
    ]);

    $payload = [
        'resumeId'    => $resume->id,
        'companyName' => 'Company Name',
        'designation' => 'Software Engineer',
        'startDate'   => '2020-01-01',
        'endDate'     => '2024-01-01',
        'isCurrent'   => false,
        'description' => 'Worked on important things',
    ];

    $response = $this->post(route('work-experiences.store'), $payload);
    $response->assertOk();

    $this->assertDatabaseHas('work_experiences', [
        'resume_id'    => $resume->id,
        'company_name' => 'Company Name',
        'designation'  => 'Software Engineer',
        'start_date'   => '2020-01-01 00:00:00',
        'end_date'     => '2024-01-01 00:00:00',
        'is_current'   => false,
        'description'  => 'Worked on important things',
    ]);
});

test('a work experience can be updated', function () {
    $resume = Resume::create([
        'title' => "John Doe's Resume",
    ]);

    $workExperience = WorkExperience::create([
        'resume_id'    => $resume->id,
        'company_name' => 'Company Name',
        'designation'  => 'Software Engineer',
        'start_date'   => '2020-01-01 00:00:00',
        'end_date'     => '2024-01-01 00:00:00',
        'is_current'   => false,
        'description'  => 'Worked on important things',
    ]);

    $payload = [
        'companyName' => 'Company Name 2',
        'designation' => 'Senior Software Engineer 2',
        'startDate'   => '2021-01-01',
        'endDate'     => '2025-01-01',
        'isCurrent'   => true,
        'description' => 'Led important things 2',
    ];

    $response = $this->patch(
        route('work-experiences.update', $workExperience->id),
        $payload
    );

    $response->assertOk();

    $this->assertDatabaseHas('work_experiences', [
        'resume_id'    => $resume->id,
        'company_name' => 'Company Name 2',
        'designation'  => 'Senior Software Engineer 2',
        'start_date'   => '2021-01-01 00:00:00',
        'end_date'     => '2025-01-01 00:00:00',
        'is_current'   => true,
        'description'  => 'Led important things 2',
    ]);
});

test('a work experience can be deleted', function () {
    $resume = Resume::create([
        'title' => "John Doe's Resume",
    ]);

    $workExperience = WorkExperience::create([
        'resume_id'    => $resume->id,
        'company_name' => 'Company Name',
        'designation'  => 'Software Engineer',
        'start_date'   => '2020-01-01 00:00:00',
        'end_date'     => '2024-01-01 00:00:00',
        'is_current'   => false,
        'description'  => 'Worked on important things',
    ]);

    $response = $this->delete(
        route('work-experiences.destroy', $workExperience->id)
    );

    $response->assertOk();

    $this->assertDatabaseMissing('work_experiences', [
        'id' => $workExperience->id,
    ]);
});
