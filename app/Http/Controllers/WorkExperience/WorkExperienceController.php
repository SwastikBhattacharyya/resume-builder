<?php
namespace App\Http\Controllers\WorkExperience;

use App\Http\Controllers\Controller;
use App\Http\Requests\WorkExperience\StoreWorkExperienceRequest;
use App\Http\Requests\WorkExperience\UpdateWorkExperienceRequest;
use App\Models\WorkExperience;

class WorkExperienceController extends Controller
{
    public function store(StoreWorkExperienceRequest $request)
    {
        $validated = $request->validated();

        WorkExperience::create([
            'resume_id'    => $validated['resumeId'],
            'company_name' => $validated['companyName'],
            'designation'  => $validated['designation'],
            'start_date'   => $validated['startDate'],
            'end_date'     => $validated['endDate'],
            'is_current'   => $validated['isCurrent'],
            'description'  => $validated['description'],
        ]);
    }

    public function update(UpdateWorkExperienceRequest $request, WorkExperience $workExperience)
    {
        $validated = $request->validated();

        $workExperience->update(
            [
                'company_name' => $validated['companyName'],
                'designation'  => $validated['designation'],
                'start_date'   => $validated['startDate'],
                'end_date'     => $validated['endDate'],
                'is_current'   => $validated['isCurrent'],
                'description'  => $validated['description'],
            ]
        );
    }

    public function destroy(WorkExperience $workExperience)
    {
        $workExperience->delete();
    }
}
