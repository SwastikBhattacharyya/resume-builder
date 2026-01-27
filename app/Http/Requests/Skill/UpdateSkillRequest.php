<?php
namespace App\Http\Requests\Skill;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSkillRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['nullable', 'string', 'min:2', 'max:255'],
        ];
    }
}
