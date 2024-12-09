import { z } from "zod";
import { isTruthy } from "remeda";
import { UserTypes } from "../enums";

const userTypes = Object.keys(UserTypes);

const registerSchema = z.object({
  username: z.string().refine((username) => isTruthy(username), {
    message: "usernameIsRequired",
  }),
  password: z.string().refine((password) => isTruthy(password), {
    message: "passwordIsRequired",
  }),
  userType: z
    .string()
    .refine((userType) => userTypes.find((type) => type === userType), {
      message: "userTypeIncorrect",
    }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

export default registerSchema;
