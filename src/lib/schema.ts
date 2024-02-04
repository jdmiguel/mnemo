import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(8),
});

export const SignUpSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});
