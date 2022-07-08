import { hashPassword } from "../../../lib/auth/hash-password";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@splashsaver/prisma";

// dev url http://localhost:3001/api/auth/signup

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return;

  interface Body {
    name: string;
    email: string;
    password: string;
  }

  const data = req.body as Body;

  const { name, email, password } = data;

  const emailLowerCase = email.toLowerCase();

  if (!name || !email || !password) {
    return res.status(422).send({
      success: false,
      error: "Please provide all the required fields.",
    });
  }

  if (password.trim().length < 8) {
    return res.status(422).send({
      success: false,
      error: "Password must be at least 8 characters.",
    });
  }

  // Returns the user if the user with the email exists
  const userAlreadyExist = await prisma.user.findFirst({
    where: { email: emailLowerCase },
  });

  if (userAlreadyExist) {
    return res.status(409).send({
      success: false,
      error: "User with this email already exists.",
    });
  }

  const hashedPassword = await hashPassword(password);

  // Creates user
  const user = await prisma.user.create({
    data: {
      name,
      email: emailLowerCase,
      username: "user",
      website: "splashsaver.com",
      emailVerified: false,
      password: hashedPassword,
    },
  });

  res.status(201).send({ success: true });
}
