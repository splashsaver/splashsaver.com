import { NextApiRequest, NextApiResponse } from "next";

// dev url http://localhost:3001/api/auth/signup
// setup prisma and finish this later

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return;

  interface Body {
    email: string;
    password: string;
  }

  const data = req.body as Body;

  const { email, password } = data;

  if (!email || !password) {
    return res.status(422).send({
      success: false,
      error: "Please provide both the email and password.",
    });
  }

  if (password.trim().length < 8) {
    return res.status(422).send({
      success: false,
      error: "Password must be at least 8 characters.",
    });
  }

  res.status(200).send({ success: true });
}
