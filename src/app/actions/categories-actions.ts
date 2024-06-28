"use server";

import { getAccessToken } from "@/utils/sessionTokenAccessor";

export async function getCategories() {
  const data = await getAccessToken();

  const categories = await fetch(
    `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/page-content/category`,
    {
      method: "GET",
    }
  ).then((res) => res.json());

  return categories;
}
