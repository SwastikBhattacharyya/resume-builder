<?php
namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Http\Requests\Project\StoreProjectRequest;
use App\Http\Requests\Project\UpdateProjectRequest;
use App\Models\Project;

class ProjectController extends Controller
{
    public function store(StoreProjectRequest $request)
    {
        $validated = $request->validated();

        Project::create([
            'resume_id'   => $validated['resumeId'],
            'name'        => $validated['name'],
            'role'        => $validated['role'],
            'start_date'  => $validated['startDate'],
            'end_date'    => $validated['endDate'],
            'ongoing'     => $validated['ongoing'],
            'description' => $validated['description'],
            'url'         => $validated['url'],
        ]);
    }

    public function update(UpdateProjectRequest $request, Project $project)
    {
        $validated = $request->validated();

        $project->update(
            [
                'name'        => $validated['name'],
                'role'        => $validated['role'],
                'start_date'  => $validated['startDate'],
                'end_date'    => $validated['endDate'],
                'ongoing'     => $validated['ongoing'],
                'description' => $validated['description'],
                'url'         => $validated['url'],
            ]
        );
    }

    public function destroy(Project $project)
    {
        $project->delete();
    }
}
