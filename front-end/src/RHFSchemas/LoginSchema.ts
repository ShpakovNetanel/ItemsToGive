import { z } from "zod";
import { isTruthy } from "remeda";

const loginSchema = z.object({
  email: z
    .string()
    .email()
    .refine((username) => isTruthy(username), {
      message: "emailIsRequired",
    }),
  password: z.string().refine((password) => isTruthy(password), {
    message: "passwordIsRequired",
  }),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export default loginSchema;
