import { AuthOptions, User } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
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
      account!.username = (user as any).username;
      account!.userEmail = user.email;
      account!.fullName = (user as any).fullName;
      account!.role = (user as any).role;
      // account!.profilePicture = (user as any).profilePicture;

      return true;
    },
    async jwt({ token, account }) {
      if (account) {
        token.username = account.username;
        token.userId = account.userId;
        token.userEmail = account.userEmail;
        token.fullName = account.fullName;
        token.userRole = account.role;
        // token.profilePicture = account.profilePicture;
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
        session.user = {
          id: token.userId,
          username: token.username,
          email: token.userEmail,
          fullName: token.fullName,
          role: token.userRole,
          // profilePicture: token.profilePicture,
        };
        session.token = token;
      }
      return await session;
    },
  },
};

export default auth;
