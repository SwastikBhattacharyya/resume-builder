import z from "zod";

export const signInSchema = z.object({
  email: z
    .string("Email address must be a string")
    .nonempty("Email address is required")
    .and(z.email("Email address is invalid")),
  password: z
    .string("Password must be a string")
    .nonempty("Password is required")
    .min(8, "Password must contain at least 8 characters"),
});

export type SignIn = z.infer<typeof signInSchema>;
