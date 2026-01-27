<?php
namespace App\Http\Requests\ContactDetail;

use Illuminate\Foundation\Http\FormRequest;

class UpdateContactDetailRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'email'    => ['nullable', 'email', 'max:255'],
            'phone'    => ['nullable', 'string', 'min:7', 'max:20'],
            'location' => ['nullable', 'string', 'min:5', 'max:255'],
            'linkedin' => ['nullable', 'url', 'max:255'],
            'github'   => ['nullable', 'url', 'max:255'],
            'website'  => ['nullable', 'url', 'max:255'],
        ];
    }
}
