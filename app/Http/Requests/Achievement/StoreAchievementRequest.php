<?php
namespace App\Http\Requests\Achievement;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreAchievementRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'resumeId'    => [
                'required',
                'uuid',
                Rule::exists('resumes', 'id'),
            ],
            'title'       => ['required', 'string', 'min:5', 'max:255'],
            'issuer'      => ['required', 'string', 'min:5', 'max:255'],
            'dateAwarded' => ['required', 'date'],
            'description' => ['nullable', 'string'],
        ];
    }
}
