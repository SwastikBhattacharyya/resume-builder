<?php
namespace App\Http\Resources\PersonalDetail;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PersonalDetailResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'          => $this->id,
            'resumeId'    => $this->resume_id,
            'fullName'    => $this->full_name,
            'designation' => $this->designation,
            'profile'     => $this->profile,
        ];
    }
}
