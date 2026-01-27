<?php
namespace App\Http\Controllers\PersonalDetail;

use App\Http\Controllers\Controller;
use App\Http\Requests\PersonalDetail\UpdatePersonalDetailRequest;
use App\Models\PersonalDetail;

class PersonalDetailController extends Controller
{
    public function update(UpdatePersonalDetailRequest $request, PersonalDetail $personalDetail)
    {
        $validated = $request->validated();

        $personalDetail->update(
            [
                'full_name'   => $validated['fullName'],
                'designation' => $validated['designation'],
                'profile'     => $validated['profile'],
            ]
        );
    }
}
