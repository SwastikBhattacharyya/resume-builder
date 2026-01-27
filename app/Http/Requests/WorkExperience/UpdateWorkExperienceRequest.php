<?php
namespace App\Http\Requests\WorkExperience;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateWorkExperienceRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'companyName' => ['nullable', 'string', 'min:5', 'max:255'],
            'designation' => ['nullable', 'string', 'min:3', 'max:255'],
            'startDate'   => ['nullable', 'date'],
            'endDate'     => ['nullable', 'date', 'after_or_equal:startDate', Rule::requiredIf(fn() => ! $this->boolean('isCurrent'))],
            'isCurrent'   => ['nullable', 'boolean'],
            'description' => ['nullable', 'string'],
        ];
    }
}
