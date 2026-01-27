<?php
namespace App\Http\Resources\Resume;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ResumeResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'        => $this->id,
            'title'     => $this->title,

            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
        ];
    }
}
