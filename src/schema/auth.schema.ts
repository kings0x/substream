import z, { success } from "zod";

export const signupSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First name must be at least 3 characters long" })
    .max(50, { message: "First name must be at most 50 characters long" })
    .regex(/^[A-Za-z\s'-]+$/, { message: "First name contains invalid characters" }),

  lastName: z
    .string()
    .min(3, { message: "Last name must be at least 3 characters long" })
    .max(50, { message: "Last name must be at most 50 characters long" })
    .regex(/^[A-Za-z\s'-]+$/, { message: "Last name contains invalid characters" }),

  email: z
    .email({ message: "Invalid email address format" })
    .max(100, { message: "Email must be at most 100 characters long" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(64, { message: "Password must be at most 64 characters long" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[@$!%*?&#]/, { message: "Password must contain at least one special character (@$!%*?&#)" }),

});

export type SignupSchema = z.infer<typeof signupSchema>;