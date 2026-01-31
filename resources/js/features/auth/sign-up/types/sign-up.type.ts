import z from "zod";

export const signUpSchema = z.object({
  name: z
    .string("Name must be a string")
    .nonempty("Name is required")
    .min(2, "Name must contain at least 2 characters")
    .max(255, "Name must contain at most 255 characters"),
  email: z
    .string("Email address must be a string")
    .nonempty("Email address is required")
    .and(z.email("Email address is invalid")),
  password: z
    .string("Password must be a string")
    .nonempty("Password is required")
    .min(8, "Password must contain at least 8 characters")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character",
    ),
});

export type SignUp = z.infer<typeof signUpSchema>;
