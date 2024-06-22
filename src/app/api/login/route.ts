import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/utils/passwordHash";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return new Response("username and password are required", {
      status: 400,
    });
  }
  try {
    const user = await prisma.user.findUnique({
      where: { username: username },
      select: {
        id: true,
        username: true,
        email: true,
        password: true,
      },
    });

    if (user && user.password === hashPassword(password)) {
      return new Response(JSON.stringify(exclude(user, ["password"])), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      return new Response("Invalid username or password", {
        status: 401,
      });
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
