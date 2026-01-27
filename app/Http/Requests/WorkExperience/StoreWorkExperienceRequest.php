<?php
namespace App\Http\Requests\WorkExperience;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreWorkExperienceRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'resumeId'    => [
                'required',
                'uuid',
                Rule::exists('resumes', 'id'),
            ],
            'companyName' => ['required', 'string', 'min:5', 'max:255'],
            'designation' => ['required', 'string', 'min:3', 'max:255'],
            'startDate'   => ['required', 'date'],
            'endDate'     => ['nullable', 'date', 'after_or_equal:startDate', Rule::requiredIf(fn() => ! $this->boolean('isCurrent'))],
            'isCurrent'   => ['required', 'boolean'],
            'description' => ['nullable', 'string'],
        ];
    }
}
