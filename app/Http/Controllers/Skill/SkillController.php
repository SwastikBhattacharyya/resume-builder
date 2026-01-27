<?php
namespace App\Http\Controllers\Skill;

use App\Http\Controllers\Controller;
use App\Http\Requests\Skill\StoreSkillRequest;
use App\Http\Requests\Skill\UpdateSkillRequest;
use App\Models\Skill;

class SkillController extends Controller
{
    public function store(StoreSkillRequest $request)
    {
        $validated = $request->validated();

        Skill::create([
            'resume_id' => $validated['resumeId'],
            'name'      => $validated['name'],
        ]);
    }

    public function update(UpdateSkillRequest $request, Skill $skill)
    {
        $validated = $request->validated();

        $skill->update(
            [
                'name' => $validated['name'],
            ]
        );
    }

    public function destroy(Skill $skill)
    {
        $skill->delete();
    }
}
