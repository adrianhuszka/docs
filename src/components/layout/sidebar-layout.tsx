"use client";
import { useState } from "react";

interface SidebarLayoutProps {
  target: {
    title: string;
    anchor: string;
  }[];
}

const SidebarLayout = ({ target }: SidebarLayoutProps) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {!showSidebar && (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed z-30 flex items-center cursor-pointer left-5 top-[10%] "
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
        className={`top-0 left-0 w-[15vw] bg-blue-600 z-50  text-white fixed h-full ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-[-100%]"
        }`}
      >
        <div className="pt-20 p-2 flex flex-col gap-2">
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

          {target.map((item, index) => (
            <>
              <a
                key={index}
                onClick={() => (window.location.hash = item.anchor)}
                className="text-white cursor-pointer hover:underline"
              >
                {item.title}
              </a>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default SidebarLayout;
