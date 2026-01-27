<?php
namespace App\Http\Resources\Resume;

use App\Http\Resources\Achievement\AchievementResource;
use App\Http\Resources\ContactDetail\ContactDetailResource;
use App\Http\Resources\EducationDetail\EducationDetailResource;
use App\Http\Resources\PersonalDetail\PersonalDetailResource;
use App\Http\Resources\Project\ProjectResource;
use App\Http\Resources\Skill\SkillResource;
use App\Http\Resources\WorkExperience\WorkExperienceResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ResumeResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'               => $this->id,
            'title'            => $this->title,

            'personalDetail'   => new PersonalDetailResource($this->personalDetail),
            'contactDetail'    => new ContactDetailResource($this->contactDetail),

            'educationDetails' => EducationDetailResource::collection(
                $this->educationDetails
                    ->sortByDesc(fn($e) => $e->start_date ?? PHP_INT_MIN)
                    ->values()
            ),

            'workExperiences'  => WorkExperienceResource::collection(
                $this->workExperiences
                    ->sortByDesc(fn($w) => $w->start_date ?? PHP_INT_MIN)
                    ->values()
            ),

            'projects'         => ProjectResource::collection(
                $this->projects
                    ->sortByDesc(fn($p) => $p->start_date ?? PHP_INT_MIN)
                    ->values()
            ),

            'skills'           => SkillResource::collection(
                $this->skills
                    ->sortBy('name')
                    ->values()
            ),

            'achievements'     => AchievementResource::collection(
                $this->achievements
                    ->sortByDesc(fn($a) => $a->date_awarded ?? PHP_INT_MIN)
                    ->values()
            ),

            'createdAt'        => $this->created_at,
            'updatedAt'        => $this->updated_at,
        ];
    }
}
