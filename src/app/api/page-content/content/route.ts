import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const url = new URL(req.url);

  const data = await prisma.content.findMany({
    where: {
      authorId: url.searchParams.get("userId")!,
      categoryId: url.searchParams.get("categoryId")!,
    },
    select: {
      id: true,
      title: true,
      category: true,
      createdAt: true,
      updatedAt: true,
      description: true,
      htmlId: true,
      code: true,
      showRes: true,
    },
  });

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}

export async function POST(req: Request) {
  const { title, category, description, htmlId, code, showRes, userId } =
    await req.json();

  const data = await prisma.content.create({
    data: {
      title,
      category,
      description,
      htmlId,
      code,
      showRes,
      authorId: userId,
      author: {
        connect: {
          id: userId,
        },
      },
    },
  });

  return new Response(
    JSON.stringify({
      message: "Sikeres mentés",
      data,
    }),
    {
      status: 200,
    }
  );
}

export async function PUT(req: Request) {
  const { title, category, description, htmlId, code, showRes, id, userId } =
    await req.json();

  const data = await prisma.content.update({
    where: { id },
    data: {
      title,
      category,
      description,
      htmlId,
      code,
      showRes,
      authorId: userId,
    },
  });

  return new Response(
    JSON.stringify({
      message: "Sikeres mentés",
      data,
    }),
    {
      status: 200,
    }
  );
}
