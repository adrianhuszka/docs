import { Card, CardHeader, Link, Tooltip } from "@nextui-org/react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between flex flex-wrap flex-row font-mono text-sm lg:flex gap-6">
        <Card
          className="w-[calc(50%-1.5rem)] h-60 p-8"
          as={Link}
          href={"/webprog"}
        >
          <CardHeader className="text-3xl font-bold h-full flex items-center justify-center">
            Webprogramozás
          </CardHeader>
        </Card>
        <Tooltip content="Fejlesztés alatt" color="danger">
          <Card
            className="w-[calc(50%-1.5rem)] h-60 p-8 cross-out"
            as={Link}
            href={"#"}
          >
            <CardHeader className="text-3xl font-bold h-full flex items-center justify-center">
              Python Programozás
            </CardHeader>
          </Card>
        </Tooltip>
      </div>
    </main>
  );
}
