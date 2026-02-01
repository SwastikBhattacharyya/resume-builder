<?php

namespace App\Http\Controllers;

use App\Models\Resume;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminDashboard extends Controller
{
    public function __invoke(Request $request)
    {
        $users = User::latest()->paginate(10);

        return view('admin.users.index', compact('users'));
    }
}
