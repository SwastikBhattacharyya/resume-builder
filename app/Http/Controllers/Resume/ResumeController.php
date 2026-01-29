<?php
namespace App\Http\Controllers\Resume;

use App\Http\Controllers\Controller;
use App\Http\Requests\Resume\StoreResumeRequest;
use App\Http\Resources\Resume\ResumeResource;
use App\Models\Resume;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ResumeController extends Controller
{
    public function index()
    {
        $resumes = Resume::get();

        return Inertia::render('resumes/index', [
            'resumes' => ResumeResource::collection($resumes),
        ]);
    }

    public function create()
    {
        return Inertia::render('resumes/create');
    }

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

    public function edit(Resume $resume)
    {
        return Inertia::render('resumes/edit', [
            'resume' => new ResumeResource($resume),
        ]);
    }

    public function destroy(Resume $resume)
    {
        $resume->delete();
    }
}
