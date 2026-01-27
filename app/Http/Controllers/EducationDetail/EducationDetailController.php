<?php
namespace App\Http\Controllers\EducationDetail;

use App\Http\Controllers\Controller;
use App\Http\Requests\EducationDetail\StoreEducationDetailRequest;
use App\Http\Requests\EducationDetail\UpdateEducationDetailRequest;
use App\Models\EducationDetail;

class EducationDetailController extends Controller
{
    public function store(StoreEducationDetailRequest $request)
    {
        $validated = $request->validated();

        EducationDetail::create([
            'resume_id'   => $validated['resumeId'],
            'institution' => $validated['institution'],
            'degree'      => $validated['degree'],
            'start_date'  => $validated['startDate'],
            'end_date'    => $validated['endDate'],
            'ongoing'     => $validated['ongoing'],
            'description' => $validated['description'],
        ]);
    }

    public function update(UpdateEducationDetailRequest $request, EducationDetail $educationDetail)
    {
        $validated = $request->validated();

        $educationDetail->update(
            [
                'institution' => $validated['institution'],
                'degree'      => $validated['degree'],
                'start_date'  => $validated['startDate'],
                'end_date'    => $validated['endDate'],
                'ongoing'     => $validated['ongoing'],
                'description' => $validated['description'],
            ]
        );
    }

    public function destroy(EducationDetail $educationDetail)
    {
        $educationDetail->delete();
    }
}
