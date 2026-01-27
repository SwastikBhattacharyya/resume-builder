<?php
namespace App\Http\Resources\Achievement;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AchievementResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'          => $this->id,
            'resumeId'    => $this->resume_id,
            'title'       => $this->title,
            'issuer'      => $this->issuer,
            'dateAwarded' => $this->date_awarded?->format('Y-m-d'),
            'description' => $this->description,
        ];
    }
}
