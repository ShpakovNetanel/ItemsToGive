import { User, users } from "../Data/users";

export const getUser = async (userToFind: User) => {
  const user = users.find(
    (user) =>
      user.email === userToFind.email && user.password === userToFind.password
  );

  return user;
};

export const setUser = async (userToAdd: User) => {
  users.push(userToAdd);
};
