<?php
namespace App\Http\Requests\PersonalDetail;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePersonalDetailRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'fullName'    => ['nullable', 'string', 'min:2', 'max:255'],
            'designation' => ['nullable', 'string', 'min:4', 'max:255'],
            'profile'     => ['nullable', 'string', 'min:8'],
        ];
    }
}
