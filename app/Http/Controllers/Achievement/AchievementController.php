<?php
namespace App\Http\Controllers\Achievement;

use App\Http\Controllers\Controller;
use App\Http\Requests\Achievement\StoreAchievementRequest;
use App\Http\Requests\Achievement\UpdateAchievementRequest;
use App\Models\Achievement;

class AchievementController extends Controller
{
    public function store(StoreAchievementRequest $request)
    {
        $validated = $request->validated();

        Achievement::create([
            'resume_id'    => $validated['resumeId'],
            'title'        => $validated['title'],
            'issuer'       => $validated['issuer'],
            'date_awarded' => $validated['dateAwarded'],
            'description'  => $validated['description'],
        ]);
    }

    public function update(UpdateAchievementRequest $request, Achievement $achievement)
    {
        $validated = $request->validated();

        $achievement->update(
            [
                'title'        => $validated['title'],
                'issuer'       => $validated['issuer'],
                'date_awarded' => $validated['dateAwarded'],
                'description'  => $validated['description'],
            ]
        );
    }

    public function destroy(Achievement $achievement)
    {
        $achievement->delete();
    }
}
