<?php
namespace App\Http\Requests\Achievement;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAchievementRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'title'       => ['nullable', 'string', 'min:5', 'max:255'],
            'issuer'      => ['nullable', 'string', 'min:5', 'max:255'],
            'dateAwarded' => ['nullable', 'date'],
            'description' => ['nullable', 'string'],
        ];
    }
}
