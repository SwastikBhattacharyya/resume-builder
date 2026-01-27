<?php
namespace App\Http\Resources\WorkExperience;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WorkExperienceResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'          => $this->id,
            'resumeId'    => $this->resume_id,
            'companyName' => $this->company_name,
            'designation' => $this->designation,
            'startDate'   => $this->start_date?->format('Y-m-d'),
            'endDate'     => $this->end_date?->format('Y-m-d'),
            'isCurrent'   => $this->is_current,
            'description' => $this->description,
        ];
    }
}
