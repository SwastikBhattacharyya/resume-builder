<?php
namespace App\Http\Resources\ContactDetail;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContactDetailResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'       => $this->id,
            'resumeId' => $this->resume_id,
            'email'    => $this->email,
            'phone'    => $this->phone,
            'location' => $this->location,
            'linkedin' => $this->linkedin,
            'github'   => $this->github,
            'website'  => $this->website,
        ];
    }
}
