<?php

use App\Models\Achievement;
use App\Models\Resume;

test('an achievement can be created', function () {
    $resume = Resume::create([
        'title' => "John Doe's Resume",
    ]);

    $payload = [
        'resumeId'    => $resume->id,
        'title'       => 'Best Developer Award',
        'issuer'      => 'Tech Conference',
        'dateAwarded' => '2023-06-01',
        'description' => 'Awarded for outstanding performance',
    ];

    $response = $this->post(route('achievements.store'), $payload);
    $response->assertOk();

    $this->assertDatabaseHas('achievements', [
        'resume_id'    => $resume->id,
        'title'        => 'Best Developer Award',
        'issuer'       => 'Tech Conference',
        'date_awarded' => '2023-06-01 00:00:00',
        'description'  => 'Awarded for outstanding performance',
    ]);
});

test('an achievement can be updated', function () {
    $resume = Resume::create([
        'title' => "John Doe's Resume",
    ]);

    $achievement = Achievement::create([
        'resume_id'    => $resume->id,
        'title'        => 'Best Developer Award',
        'issuer'       => 'Tech Conference',
        'date_awarded' => '2023-06-01 00:00:00',
        'description'  => 'Awarded for outstanding performance',
    ]);

    $payload = [
        'title'       => 'Outstanding Engineer Award',
        'issuer'      => 'Global Tech Org',
        'dateAwarded' => '2024-01-01',
        'description' => 'Recognized for leadership and impact',
    ];

    $response = $this->patch(
        route('achievements.update', $achievement->id),
        $payload
    );

    $response->assertOk();

    $this->assertDatabaseHas('achievements', [
        'resume_id'    => $resume->id,
        'title'        => 'Outstanding Engineer Award',
        'issuer'       => 'Global Tech Org',
        'date_awarded' => '2024-01-01 00:00:00',
        'description'  => 'Recognized for leadership and impact',
    ]);
});

test('an achievement can be deleted', function () {
    $resume = Resume::create([
        'title' => "John Doe's Resume",
    ]);

    $achievement = Achievement::create([
        'resume_id'    => $resume->id,
        'title'        => 'Best Developer Award',
        'issuer'       => 'Tech Conference',
        'date_awarded' => '2023-06-01 00:00:00',
        'description'  => 'Awarded for outstanding performance',
    ]);

    $response = $this->delete(
        route('achievements.destroy', $achievement->id)
    );

    $response->assertOk();

    $this->assertDatabaseMissing('achievements', [
        'id' => $achievement->id,
    ]);
});
