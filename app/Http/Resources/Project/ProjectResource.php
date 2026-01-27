<?php
namespace App\Http\Resources\Project;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'          => $this->id,
            'resumeId'    => $this->resume_id,
            'name'        => $this->name,
            'role'        => $this->role,
            'startDate'   => $this->start_date?->format('Y-m-d'),
            'endDate'     => $this->end_date?->format('Y-m-d'),
            'ongoing'     => $this->ongoing,
            'description' => $this->description,
            'url'         => $this->url,
        ];
    }
}
