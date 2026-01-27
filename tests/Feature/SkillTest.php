<?php

use App\Models\Resume;
use App\Models\Skill;

test('a skill can be created', function () {
    $resume = Resume::create([
        'title' => "John Doe's Resume",
    ]);
    $payload = [
        'resumeId' => $resume->id,
        'name'     => 'Laravel',
    ];

    $response = $this->post(route('skills.store'), $payload);
    $response->assertOk();

    $this->assertDatabaseHas('skills', [
        'resume_id' => $resume->id,
        'name'      => 'Laravel',
    ]);
});

test('a skill can be updated', function () {
    $resume = Resume::create([
        'title' => "John Doe's Resume",
    ]);

    $skill = Skill::create([
        'resume_id' => $resume->id,
        'name'      => 'Laravel',
    ]);

    $payload = [
        'name' => 'Laravel + Vue',
    ];

    $response = $this->patch(
        route('skills.update', $skill->id),
        $payload
    );

    $response->assertOk();

    $this->assertDatabaseHas('skills', [
        'resume_id' => $resume->id,
        'name'      => 'Laravel + Vue',
    ]);
});

test('a skill can be deleted', function () {
    $resume = Resume::create([
        'title' => "John Doe's Resume",
    ]);

    $skill = Skill::create([
        'resume_id' => $resume->id,
        'name'      => 'Laravel',
    ]);

    $response = $this->delete(
        route('skills.destroy', $skill->id)
    );

    $response->assertOk();

    $this->assertDatabaseMissing('skills', [
        'id' => $skill->id,
    ]);
});
