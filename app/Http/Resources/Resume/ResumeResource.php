<?php
namespace App\Http\Resources\Resume;

use App\Http\Resources\ContactDetail\ContactDetailResource;
use App\Http\Resources\PersonalDetail\PersonalDetailResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ResumeResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'             => $this->id,
            'title'          => $this->title,

            'personalDetail' => new PersonalDetailResource($this->personalDetail),
            'contactDetail'  => new ContactDetailResource($this->contactDetail),

            'createdAt'      => $this->created_at,
            'updatedAt'      => $this->updated_at,
        ];
    }
}
