<?php

use App\Models\Project;
use App\Models\Resume;

test('a project can be created', function () {
    $resume = Resume::create([
        'title' => "John Doe's Resume",
    ]);

    $payload = [
        'resumeId'    => $resume->id,
        'name'        => 'Project Name',
        'role'        => 'Lead Developer',
        'startDate'   => '2020-01-01',
        'endDate'     => '2024-01-01',
        'ongoing'     => false,
        'description' => 'Built something useful',
        'url'         => 'https://example.com',
    ];

    $response = $this->post(route('projects.store'), $payload);
    $response->assertOk();

    $this->assertDatabaseHas('projects', [
        'resume_id'   => $resume->id,
        'name'        => 'Project Name',
        'role'        => 'Lead Developer',
        'start_date'  => '2020-01-01 00:00:00',
        'end_date'    => '2024-01-01 00:00:00',
        'ongoing'     => false,
        'description' => 'Built something useful',
        'url'         => 'https://example.com',
    ]);
});

test('a project can be updated', function () {
    $resume = Resume::create([
        'title' => "John Doe's Resume",
    ]);

    $project = Project::create([
        'resume_id'   => $resume->id,
        'name'        => 'Project Name',
        'role'        => 'Developer',
        'start_date'  => '2020-01-01 00:00:00',
        'end_date'    => '2024-01-01 00:00:00',
        'ongoing'     => false,
        'description' => 'Built something useful',
        'url'         => 'https://example.com',
    ]);

    $payload = [
        'name'        => 'Project Name 2',
        'role'        => 'Tech Lead',
        'startDate'   => '2021-01-01',
        'endDate'     => '2025-01-01',
        'ongoing'     => true,
        'description' => 'Built something even better',
        'url'         => 'https://example.org',
    ];

    $response = $this->patch(
        route('projects.update', $project->id),
        $payload
    );

    $response->assertOk();

    $this->assertDatabaseHas('projects', [
        'resume_id'   => $resume->id,
        'name'        => 'Project Name 2',
        'role'        => 'Tech Lead',
        'start_date'  => '2021-01-01 00:00:00',
        'end_date'    => '2025-01-01 00:00:00',
        'ongoing'     => true,
        'description' => 'Built something even better',
        'url'         => 'https://example.org',
    ]);
});

test('a project can be deleted', function () {
    $resume = Resume::create([
        'title' => "John Doe's Resume",
    ]);

    $project = Project::create([
        'resume_id'   => $resume->id,
        'name'        => 'Project Name',
        'role'        => 'Developer',
        'start_date'  => '2020-01-01 00:00:00',
        'end_date'    => '2024-01-01 00:00:00',
        'ongoing'     => false,
        'description' => 'Built something useful',
        'url'         => 'https://example.com',
    ]);

    $response = $this->delete(
        route('projects.destroy', $project->id)
    );

    $response->assertOk();

    $this->assertDatabaseMissing('projects', [
        'id' => $project->id,
    ]);
});
