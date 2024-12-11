import { atom } from "recoil";
import { User } from "../Data/users";

export const loggedUser = atom<User>({
  key: "loggedUser",
  default: {
    email: "",
    password: "",
    phoneNumber: "",
  },
});
