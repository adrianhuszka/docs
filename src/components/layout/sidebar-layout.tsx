"use client";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { useState } from "react";

interface SidebarLayoutProps {
  target: {
    category: string;
    data: {
      title: string;
      anchor: string;
    }[];
  }[];
}

const SidebarLayout = ({ target }: SidebarLayoutProps) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {!showSidebar && (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed z-[25] flex items-center cursor-pointer left-5 top-[10%] "
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`md:top-[5vh] top-[9vh] z-[25] left-0 md:w-[15vw] 100vw bg-gray-900 md:bg-opacity-50 shadow-glass text-white fixed h-full ease-in-out duration-300 max-h-[95vh] overflow-hidden ${
          showSidebar ? "translate-x-0 " : "translate-x-[-100%]"
        }`}
      >
        <div className="flex flex-col gap-2  max-h-[95vh] overflow-hidden p-4">
          <div className="flex justify-end w-full gap-2">
            <button
              className="flex text-4xl cursor-pointer justify-end p-2 w-fit"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <svg
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </button>
          </div>
          <div className="max-h-[95vh] overflow-auto p-4">
            {target.map((item, index) => (
              <div className="flex flex-col gap-2 pb-5" key={index}>
                <Divider />
                <h1 className="text-3xl font-bold uppercase text-center">
                  {item.category}
                </h1>
                <Divider />
                {item.data.map((item, index) => (
                  <React.Fragment key={index}>
                    {/* <a
                      key={index}
                      onClick={() => (window.location.hash = item.anchor)}
                      className="text-white cursor-pointer hover:underline"
                    >
                      {item.title}
                    </a> */}
                    <Link
                      href={`#${item.anchor}`}
                      className="text-white cursor-pointer hover:underline"
                      onClick={() => setShowSidebar(!showSidebar)}
                    >
                      {item.title}
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarLayout;
