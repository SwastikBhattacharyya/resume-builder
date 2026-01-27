<?php

use App\Models\EducationDetail;
use App\Models\Resume;

test('an education detail can be created', function () {
    $resume = Resume::create([
        'title' => 'John Doe\'s Resume',
    ]);
    $payload = [
        'resumeId'    => $resume->id,
        'institution' => 'Institution Name',
        'degree'      => 'Degree Name',
        'startDate'   => '2020-01-01',
        'endDate'     => '2024-01-01',
        'ongoing'     => false,
        'description' => 'Education Description',
    ];

    $response = $this->post(route('education-details.store'), $payload);
    $response->assertOk();

    $this->assertDatabaseHas('education_details', [
        'resume_id'   => $resume->id,
        'institution' => 'Institution Name',
        'degree'      => 'Degree Name',
        'start_date'  => '2020-01-01 00:00:00',
        'end_date'    => '2024-01-01 00:00:00',
        'ongoing'     => false,
        'description' => 'Education Description',
    ]);
});

test('an education detail can be updated', function () {
    $resume = Resume::create([
        'title' => 'John Doe\'s Resume',
    ]);
    $educationDetail = EducationDetail::create([
        'resume_id'   => $resume->id,
        'institution' => 'Institution Name',
        'degree'      => 'Degree Name',
        'start_date'  => '2020-01-01 00:00:00',
        'end_date'    => '2024-01-01 00:00:00',
        'ongoing'     => false,
        'description' => 'Education Description',
    ]);

    $payload = [
        'institution' => 'Institution Name 2',
        'degree'      => 'Degree Name 2',
        'startDate'   => '2021-01-01 00:00:00',
        'endDate'     => '2025-01-01 00:00:00',
        'ongoing'     => true,
        'description' => 'Education Description 2',
    ];

    $response = $this->patch(route('education-details.update', $educationDetail->id), $payload);
    $response->assertOk();

    $this->assertDatabaseHas('education_details', [
        'resume_id'   => $resume->id,
        'institution' => 'Institution Name 2',
        'degree'      => 'Degree Name 2',
        'start_date'  => '2021-01-01 00:00:00',
        'end_date'    => '2025-01-01 00:00:00',
        'ongoing'     => true,
        'description' => 'Education Description 2',
    ]);
});

test('an education detail can be deleted', function () {
    $resume = Resume::create([
        'title' => 'John Doe\'s Resume',
    ]);
    $educationDetail = EducationDetail::create([
        'resume_id'   => $resume->id,
        'institution' => 'Institution Name',
        'degree'      => 'Degree Name',
        'start_date'  => '2020-01-01 00:00:00',
        'end_date'    => '2024-01-01 00:00:00',
        'ongoing'     => false,
        'description' => 'Education Description',
    ]);

    $response = $this->delete(route('education-details.destroy', $educationDetail->id));
    $response->assertOk();

    $this->assertDatabaseMissing('education_details', [
        'id' => $educationDetail->id,
    ]);
});
