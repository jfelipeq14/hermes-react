import { User } from "../models/users/users.model.js";

export const createAddaptedUser = (user) => {
  const formattedUser = new User({
    idUser: user.id,
    idRole: user.name,
    documentType: user.documentType,
    identification: user.identification,
    email: user.email,
    password: user.password,
    status: user.status,
  });
  return formattedUser;
};
