import { SHA256 as sha256 } from "crypto-js";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "./create";

export default async function handle(
  req: { method: string },
  res: { status: (arg0: number) => any }
) {
  if (req.method === "POST") {
    //login uer
    await loginUserHandler(req, res);
  } else {
    return res.status(405);
  }
}

async function loginUserHandler(
  req: { method?: string; body?: any },
  res: { status: any }
) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "invalid inputs" });
  }
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        username: true,
        email: true,
        password: true,
      },
    });

    if (user && user.password === hashPassword(password)) {
      return res
        .status(200)
        .json({ message: JSON.stringify(exclude(user, ["password"])) });
    } else {
      return res.status(401).json({ message: "invalid credentials" });
    }
  } catch (e: any) {
    throw new Error(e);
  }
}

function exclude(
  user: {
    [x: string]: any;
    id?: string;
    username?: string;
    email?: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
  },
  keys: string[]
) {
  for (let key of keys) {
    delete user[key];
  }
  return user;
}
