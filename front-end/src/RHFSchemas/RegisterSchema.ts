import { isTruthy } from "remeda";
import { z } from "zod";

const registerSchema = z.object({
  email: z
    .string()
    .email({ message: "enterValidEmail" })
    .refine((username) => isTruthy(username), {
      message: "emailIsRequired",
    }),
  password: z.string().refine((password) => isTruthy(password), {
    message: "passwordIsRequired",
  }),
  phoneNumber: z.string().refine((phoneNumber) => isTruthy(phoneNumber), {
    message: "phoneNumberIsRequired",
  }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

export default registerSchema;
