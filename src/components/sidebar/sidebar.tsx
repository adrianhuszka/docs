import React from "react";
import { Sidebar } from "./sidebar.styles";
import { HomeIcon } from "@/components/icons/sidebar/home-icon";
import { SettingsIcon } from "@/components/icons/sidebar/settings-icon";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from "@/components/layout/layout-context";
import { ChangeLogIcon } from "@/components/icons/sidebar/changelog-icon";
import { usePathname } from "next/navigation";
import { AccountsIcon } from "@/components/icons/sidebar/accounts-icon";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-full z-[202] fixed top-0 mt-16">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Dashboard"
              icon={<HomeIcon />}
              isActive={pathname.endsWith("/admin/dashboard")}
              href="dashboard"
            />
            <SidebarMenu title="Fő menü">
              <SidebarItem
                isActive={pathname.endsWith("/admin/page-content")}
                title="Oldal adatok"
                icon={<AccountsIcon />}
                href="page-content"
              />
            </SidebarMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};
