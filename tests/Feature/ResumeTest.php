<?php

test('a personal detail can be updated', function () {
    $payload = [
        'title' => 'Document',
    ];

    $response = $this->post(route('resumes.store'), $payload);
    $response->assertOk();

    $this->assertDatabaseHas('resumes', [
        'title' => 'Document',
    ]);
});
