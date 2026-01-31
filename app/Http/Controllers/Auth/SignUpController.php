<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\SignUpRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class SignUpController extends Controller
{
    public function __invoke(SignUpRequest $request)
    {
        $validated = $request->validated();

        User::create([
            'name'     => $validated['name'],
            'email'    => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);
    }
}
