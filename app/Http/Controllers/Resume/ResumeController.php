<?php
namespace App\Http\Controllers\Resume;

use App\Http\Controllers\Controller;
use App\Http\Requests\Resume\StoreResumeRequest;
use App\Models\Resume;
use Illuminate\Support\Facades\DB;

class ResumeController extends Controller
{
    public function store(StoreResumeRequest $request)
    {
        $validated = $request->validated();

        DB::transaction(function () use ($validated) {
            $resume = Resume::create([
                'title' => $validated['title'],
            ]);

            $resume->personalDetail()->create();
            $resume->contactDetail()->create();
        });
    }
}
