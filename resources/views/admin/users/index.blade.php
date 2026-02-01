<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin – Users</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="text-gray-900">

<header class="sticky text-white top-0 z-50 w-full border-b border-gray-800 bg-background-dark/80 backdrop-blur-md">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div class="flex items-center gap-3">
            <span class="text-xl font-bold tracking-tight">
                ResumeBuilder
            </span>
        </div>

        <nav class="hidden items-center gap-10 md:flex">
            @foreach (['Templates', 'Pricing', 'Resources'] as $item)
                <a
                        href="#"
                        class="text-sm font-medium opacity-70 transition-opacity hover:opacity-100"
                >
                    {{ $item }}
                </a>
            @endforeach
        </nav>

        <div class="flex items-center gap-4">
            <a
                    href="{{ url('/auth/sign-in') }}"
                    class="px-4 text-sm font-semibold opacity-70 hover:opacity-100"
            >
                Sign In
            </a>

            <a
                    href="{{ url('/resumes') }}"
                    class="rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary/90"
            >
                Get Started
            </a>
        </div>

    </div>
</header>

<div class="mx-auto max-w-7xl p-6 space-y-6">

    <div class="flex items-center justify-between">
        <h1 class="text-2xl text-white font-semibold tracking-tight">
            Users
        </h1>
    </div>

    <div class="overflow-hidden rounded-lg border bg-white shadow-sm">
        <table class="w-full border-collapse text-sm">
            <thead class="bg-gray-100">
            <tr class="border-b">
                <th class="px-4 py-3 text-left font-medium text-gray-600">
                    ID
                </th>
                <th class="px-4 py-3 text-left font-medium text-gray-600">
                    Name
                </th>
                <th class="px-4 py-3 text-left font-medium text-gray-600">
                    Email
                </th>
                <th class="px-4 py-3 text-left font-medium text-gray-600">
                    Created At
                </th>
            </tr>
            </thead>

            <tbody>
            @forelse ($users as $user)
                <tr class="border-b last:border-0 hover:bg-gray-50 transition">
                    <td class="px-4 py-3">
                        {{ $user->id }}
                    </td>
                    <td class="px-4 py-3 font-medium">
                        {{ $user->name }}
                    </td>
                    <td class="px-4 py-3 text-gray-600">
                        {{ $user->email }}
                    </td>
                    <td class="px-4 py-3 text-gray-600">
                        {{ $user->created_at->format('d M Y') }}
                    </td>
                </tr>
            @empty
                <tr>
                    <td colspan="4" class="px-4 py-6 text-center text-gray-500">
                        No users found.
                    </td>
                </tr>
            @endforelse
            </tbody>
        </table>
    </div>

    <div>
        {{ $users->links() }}
    </div>

</div>

</body>
</html>
