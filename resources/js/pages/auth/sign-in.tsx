import { Link } from "@inertiajs/react";
import { SignInForm } from "@/features/auth/sign-in/components/forms/sign-in-form.component";

export default function SignIn() {
  return (
    <div className="justify-center-safe items-center-safe flex min-h-dvh flex-col gap-y-8">
      <header className="justify-center-safe items-center-safe flex flex-col gap-y-2 text-center">
        <h1 className="font-bold text-5xl">Sign In</h1>
        <p>Enter your credentials to sign in</p>
      </header>
      <main>
        <SignInForm />
      </main>
      <div>
        <p className="flex gap-x-2">
          <span>Don&apos;t have an account?</span>
          <Link className="text-primary" href="/auth/sign-up">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
