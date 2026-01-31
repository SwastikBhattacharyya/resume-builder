import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "@inertiajs/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import InputPassword from "@/features/auth/components/inputs/input-password.component";
import { type SignIn, signInSchema } from "../../types/sign-in.type";

export function SignInForm() {
  const form = useForm<SignIn>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: SignIn) {
    router.post("/auth/sign-in", values, {
      onError: () => toast.error("Invalid credentials"),
    });
  }

  return (
    <Form {...form}>
      <form
        className="flex w-[80dvw] flex-col gap-y-6 sm:w-[70dvw] md:w-90"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@domain.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <InputPassword {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Sign In</Button>
      </form>
    </Form>
  );
}
