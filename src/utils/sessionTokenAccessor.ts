import { getServerSession } from "next-auth";
import auth from "@/auth";
import { CustomSession } from "@/types";

export async function getAccessToken() {
  const session = await getServerSession(auth);
  if (session) {
    return (session as CustomSession).token;
  }
  return null;
}

export async function getUser() {
  const session = await getServerSession(auth);
  if (session) {
    return session.user;
  }
  return null;
}
