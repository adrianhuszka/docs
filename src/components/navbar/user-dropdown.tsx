"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/react";
import { NavbarItem } from "@nextui-org/navbar";
import { User } from "@nextui-org/user";
import clsx from "clsx";
import { signOut } from "next-auth/react";
import { CustomSession } from "@/types";
import NextLink from "next/link";
import { link } from "@nextui-org/theme";
import { Session } from "next-auth";

export default function UserDropdown({ sessionData }: { sessionData: any }) {
  async function onLogoutClick() {
    try {
      await fetch("/api/auth/logout", { method: "GET" });
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  }
  return (
    <Dropdown>
      <NavbarItem className="flex">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: false,
              src: "",
              showFallback: true,
              name: undefined,
            }}
            className="transition-transform"
            classNames={{
              name: "hidden sm:block",
              description: "hidden sm:block",
            }}
            description={"@" + sessionData?.username}
            name={sessionData?.fullName}
          />
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="Dynamic Actions"
        disabledKeys={["profile-desc"]}
        closeOnSelect={false}
      >
        <DropdownItem key="profile-desc" showDivider className="h-14 gap-2">
          <p className="font-semibold">Bejelentkezve mint</p>
          <p className="font-semibold">
            {sessionData?.fullName} ({sessionData?.username})
          </p>
        </DropdownItem>
        <DropdownSection title="Profil" showDivider>
          <DropdownItem>
            <NextLink
              className={clsx(
                link({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium w-full"
              )}
              color="foreground"
              href="/profile"
            >
              Profil
            </NextLink>
          </DropdownItem>
        </DropdownSection>
        {sessionData?.userRole.includes("ADMIN") && (
          <DropdownSection title="Adminisztráció" showDivider>
            <DropdownItem>
              <NextLink
                className={clsx(
                  link({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium w-full"
                )}
                color="foreground"
                href="/admin/dashboard"
              >
                Adminisztrációs Felület
              </NextLink>
            </DropdownItem>
          </DropdownSection>
        )}
        <DropdownItem
          className="text-red-500"
          onClick={() => {
            onLogoutClick().then(() => signOut());
          }}
        >
          Kijelentkezés
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
