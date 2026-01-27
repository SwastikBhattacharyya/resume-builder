<?php

use App\Models\ContactDetail;
use App\Models\Resume;

test('a contact detail can be updated', function () {
    $resume = Resume::create([
        'title' => 'John Doe\'s Resume',
    ]);
    $contactDetail = ContactDetail::create([
        'resume_id' => $resume->id,
    ]);
    $payload = [
        'email'    => 'johndoe@domain.com',
        'phone'    => '+1 11111-11111',
        'location' => 'New York',
        'linkedin' => 'https://linkedin.com/in/johndoe',
        'github'   => 'https://github.com/johndoe',
        'website'  => 'https://johndoe.com',
    ];

    $response = $this->patch(route('contact-details.update', $contactDetail->id), $payload);
    $response->assertOk();

    $this->assertDatabaseHas('contact_details', [
        'id'       => $contactDetail->id,
        'email'    => 'johndoe@domain.com',
        'phone'    => '+1 11111-11111',
        'location' => 'New York',
        'linkedin' => 'https://linkedin.com/in/johndoe',
        'github'   => 'https://github.com/johndoe',
        'website'  => 'https://johndoe.com',
    ]);
});
