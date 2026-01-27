<?php
namespace App\Http\Requests\EducationDetail;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreEducationDetailRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'resumeId'    => [
                'required',
                'uuid',
                Rule::exists('resumes', 'id'),
            ],
            'institution' => ['required', 'string', 'min:5', 'max:255'],
            'degree'      => ['required', 'string', 'min:3', 'max:255'],
            'startDate'   => ['required', 'date'],
            'endDate'     => ['nullable', 'date', 'after_or_equal:startDate', Rule::requiredIf(fn() => ! $this->boolean('ongoing'))],
            'ongoing'     => ['required', 'boolean'],
            'description' => ['nullable', 'string'],
        ];
    }
}
