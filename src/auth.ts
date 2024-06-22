import NextAuth, { AuthOptions, User } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { Session } from "inspector";
import { JWT } from "next-auth/jwt";
import { CustomSession } from "./types";

const auth: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/login`,
          {
            method: "POST",
            body: JSON.stringify({
              username: credentials?.username ?? "",
              password: credentials?.password ?? "",
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const user = await res.json();

        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async signIn({ user, account }) {
      account!.userId = user.id;
      account!.userName = (user as any).username;
      account!.userEmail = user.email;

      return true;
    },
    async jwt({ token, account }) {
      if (account) {
        token.userName = account.userName;
      }
      return token;
    },
    async session({
      session,
      user,
      token,
    }: {
      session: CustomSession;
      user: User;
      token: JWT;
    }) {
      if (user !== null) {
        session.user = token.userName;
        session.token = token;
      }
      return await session;
    },
  },
};

export default auth;
