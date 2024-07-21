import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    return res.status(403).end();
  }
  try {
    const { name, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    
    const user = await prisma?.user.create({
      data: {
        name,
        username,
        email,
        hashedPassword,
      }
    });
alert("hi")
    return user;
  } catch (error) {
    console.log(error);
  }
}
