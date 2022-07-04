import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@splashsaver/prisma";

// dev url http://localhost:3001/api/user/me
// TODO: finish this tm

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") return;

  res.status(200).send({ success: true });
}
