import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

export const createJsonWebToken = (user: User) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET as string);
};
