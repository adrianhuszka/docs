"use server";

import { getAccessToken } from "@/utils/sessionTokenAccessor";

export async function getContent({ categoryId }: { categoryId: string }) {
  const token = await getAccessToken();

  const content = await fetch(
    `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/page-content/content?userId=${token.userId}&categoryId=${categoryId}`,
    {
      method: "GET",
    }
  ).then((res) => res.json());

  return content;
}
