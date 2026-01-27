<?php
namespace App\Http\Resources\EducationDetail;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EducationDetailResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'          => $this->id,
            'resumeId'    => $this->resume_id,
            'institution' => $this->institution,
            'degree'      => $this->degree,
            'startDate'   => $this->start_date?->format('Y-m-d'),
            'endDate'     => $this->end_date?->format('Y-m-d'),
            'ongoing'     => $this->ongoing,
            'description' => $this->description,
        ];
    }
}
