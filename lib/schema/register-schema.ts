// src/schema/register-schema.ts
import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(8, "Phone number is too short")
    .regex(/^[0-9]+$/, "Phone must contain only numbers"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
