import { User } from "../models";

export const createAddaptedUser = (user) => {
  const formattedUser = new User({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  });
  return formattedUser;
};
