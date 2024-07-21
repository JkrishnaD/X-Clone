import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

export const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });

  if (!session?.user?.email) {
    throw new Error("Invalid Credentials");
  }

  const user = await prisma?.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  if (!user) {
    throw new Error("User Not Found");
  }
  return { user };
};
