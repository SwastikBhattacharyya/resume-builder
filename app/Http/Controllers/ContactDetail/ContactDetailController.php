<?php
namespace App\Http\Controllers\ContactDetail;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactDetail\UpdateContactDetailRequest;
use App\Models\ContactDetail;

class ContactDetailController extends Controller
{
    public function update(UpdateContactDetailRequest $request, ContactDetail $contactDetail)
    {
        $validated = $request->validated();

        $contactDetail->update(
            [
                'email'    => $validated['email'],
                'phone'    => $validated['phone'],
                'location' => $validated['location'],
                'linkedin' => $validated['linkedin'],
                'github'   => $validated['github'],
                'website'  => $validated['website'],
            ]
        );
    }
}
