<?php
namespace App\Http\Requests\Project;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateProjectRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name'        => ['nullable', 'string', 'min:5', 'max:255'],
            'role'        => ['nullable', 'string', 'min:3', 'max:255'],
            'startDate'   => ['nullable', 'date'],
            'endDate'     => ['nullable', 'date', 'after_or_equal:startDate', Rule::requiredIf(fn() => ! $this->boolean('ongoing'))],
            'ongoing'     => ['nullable', 'boolean'],
            'description' => ['nullable', 'string'],
            'url'         => ['nullable', 'url'],
        ];
    }
}
