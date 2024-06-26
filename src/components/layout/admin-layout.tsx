"use client";

import React from "react";
import { SidebarWrapper } from "../sidebar/sidebar";
import { SidebarContext } from "./layout-context";
import { useLockedBody } from "@/hooks/useBodyLock";

interface Props {
  children: React.ReactNode;
}

export const AdminContextLayout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };

  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}
    >
      <section className="flex">
        <SidebarWrapper />
        {/* <NavbarWrapper>{children}</NavbarWrapper> */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden md:ms-[16rem]">
          {children}
        </div>
      </section>
    </SidebarContext.Provider>
  );
};
