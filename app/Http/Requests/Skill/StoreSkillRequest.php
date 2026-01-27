<?php
namespace App\Http\Requests\Skill;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreSkillRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'resumeId' => [
                'required',
                'uuid',
                Rule::exists('resumes', 'id'),
            ],
            'name'     => ['required', 'string', 'min:2', 'max:255'],
        ];
    }
}
