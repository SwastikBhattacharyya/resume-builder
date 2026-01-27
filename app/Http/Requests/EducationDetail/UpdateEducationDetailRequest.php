<?php
namespace App\Http\Requests\EducationDetail;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateEducationDetailRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'institution' => ['required', 'string', 'min:5', 'max:255'],
            'degree'      => ['required', 'string', 'min:3', 'max:255'],
            'startDate'   => ['nullable', 'date'],
            'endDate'     => ['nullable', 'date', 'after_or_equal:startDate', Rule::requiredIf(fn() => ! $this->boolean('ongoing'))],
            'ongoing'     => ['nullable', 'boolean'],
            'description' => ['nullable', 'string'],
        ];
    }
}
