"use client";

import { Link } from "@nextui-org/link";
import React from "react";
import { Navbar } from "../navbar/navbar";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <header className="dark fixed top-0 z-[500] w-full h-[4rem]">
        <Navbar />
      </header>
      <main className="dark mt-[4rem]">{children}</main>
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
