<?php
namespace App\Http\Requests\Project;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreProjectRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'resumeId'    => [
                'required',
                'uuid',
                Rule::exists('resumes', 'id'),
            ],
            'name'        => ['required', 'string', 'min:5', 'max:255'],
            'role'        => ['required', 'string', 'min:3', 'max:255'],
            'startDate'   => ['required', 'date'],
            'endDate'     => ['nullable', 'date', 'after_or_equal:startDate', Rule::requiredIf(fn() => ! $this->boolean('ongoing'))],
            'ongoing'     => ['required', 'boolean'],
            'description' => ['nullable', 'string'],
            'url'         => ['nullable', 'url'],
        ];
    }
}
