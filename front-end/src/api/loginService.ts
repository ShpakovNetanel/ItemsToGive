import { useQuery } from "@tanstack/react-query";
import { User } from "../types";
import { users } from "./../Data/users";

export const useLoginUser = (userToLogin: User) => {
  const getLoginUser = async () => {
    const loggedUser =
      users.find(
        (user) =>
          user.email === userToLogin.email &&
          user.password === userToLogin.password
      ) ?? null;

    return loggedUser;
  };

  return useQuery({
    queryKey: ["getLoginUser", userToLogin],
    queryFn: getLoginUser,
  });
};
