"use client";

import { Link } from "@nextui-org/link";
import React from "react";
import { Navbar } from "../navbar/navbar";
import { Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <header className="dark fixed top-0 z-[500] w-full h-[4rem]">
        <Navbar />
      </header>
      <main className="dark xl:pt-[4rem] pt-[9rem]">{children}</main>
      {pathname !== "/" && (
        <Button
          className="fixed z-[25] flex items-center cursor-pointer xl:right-40 right-5 xl:bottom-40 bottom-5 p-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          isIconOnly
          color="primary"
          variant="solid"
        >
          <svg
            fill="#000000"
            height="800px"
            width="800px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
          >
            <path
              id="XMLID_29_"
              d="M100.606,100.606L150,51.212V315c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15V51.212l49.394,49.394
	C232.322,103.535,236.161,105,240,105c3.839,0,7.678-1.465,10.606-4.394c5.858-5.857,5.858-15.355,0-21.213l-75-75
	c-5.857-5.858-15.355-5.858-21.213,0l-75,75c-5.858,5.857-5.858,15.355,0,21.213C85.251,106.463,94.749,106.463,100.606,100.606z"
            />
          </svg>
        </Button>
      )}
      <footer className="w-full flex flex-col items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
          title="nextui.org homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">NextUI</p>
        </Link>
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://github.com/adrianhuszka/docs"
          title="Repository"
        >
          <span className="text-default-600">Created by</span>
          <p className="text-primary">Huszka Adrián</p>
        </Link>
      </footer>
    </>
  );
};
