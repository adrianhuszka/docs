import { prisma } from "@/lib/prisma";
import { getSession } from "@/utils/sessionTokenAccessor";

export async function GET(req: Request) {
  const session = await getSession();

  const data = await prisma.category.findMany({
    select: {
      id: true,
      category: true,
      categoryTitle: true,
      syntaxHighlightCode: true,
    },
  });

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}

export async function POST(req: Request) {
  const { category, categoryTitle, syntaxHighlightCode } = await req.json();

  const data = await prisma.category.create({
    data: {
      category,
      categoryTitle,
      syntaxHighlightCode,
    },
  });

  return new Response(
    JSON.stringify({
      message: "Sikeres mentés",
    }),
    {
      status: 200,
    }
  );
}

export async function PUT(req: Request) {
  const { id, category, categoryTitle, syntaxHighlightCode } = await req.json();

  const data = await prisma.category.update({
    where: {
      id,
    },
    data: {
      category,
      categoryTitle,
      syntaxHighlightCode,
    },
  });

  return new Response(
    JSON.stringify({
      message: "Sikeres módosítás",
    }),
    {
      status: 200,
    }
  );
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  const data = await prisma.category.delete({
    where: {
      id,
    },
  });

  return new Response(
    JSON.stringify({
      message: "Sikeres törlés",
    }),
    {
      status: 200,
    }
  );
}
