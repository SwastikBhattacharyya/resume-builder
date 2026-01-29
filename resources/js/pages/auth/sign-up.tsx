import { Link } from "@inertiajs/react";
import { SignUpForm } from "@/features/auth/sign-up/components/forms/sign-up-form.component";

export default function SignUp() {
  return (
    <div className="justify-center-safe items-center-safe flex min-h-dvh flex-col gap-y-8">
      <header className="justify-center-safe items-center-safe flex flex-col gap-y-2 text-center">
        <h1 className="font-bold text-5xl">Sign Up</h1>
        <p>Create an account to get started</p>
      </header>
      <main>
        <SignUpForm />
      </main>
      <div>
        <p className="flex gap-x-2">
          <span>Already have an account?</span>
          <Link className="text-primary" href="/auth/sign-in">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
