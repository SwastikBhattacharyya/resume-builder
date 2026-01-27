<?php

use App\Models\PersonalDetail;
use App\Models\Resume;

test('a personal detail can be updated', function () {
    $resume = Resume::create([
        'title' => 'John Doe\'s Resume',
    ]);
    $personalDetail = PersonalDetail::create([
        'resume_id' => $resume->id,
    ]);
    $payload = [
        'fullName'    => 'John Doe',
        'designation' => 'Intern',
        'profile'     => 'I am John Doe',
    ];

    $response = $this->patch(route('personal-details.update', $personalDetail->id), $payload);
    $response->assertOk();

    $this->assertDatabaseHas('personal_details', [
        'id'          => $personalDetail->id,
        'full_name'   => 'John Doe',
        'designation' => 'Intern',
        'profile'     => 'I am John Doe',
    ]);
});
