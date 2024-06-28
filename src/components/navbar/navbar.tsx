import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { Logo } from "../icons/logo";
import UserDropdown from "./user-dropdown";
import { getAccessToken } from "@/utils/sessionTokenAccessor";

export const Navbar = async () => {
  const token = await getAccessToken();
  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      classNames={{
        wrapper: "px-0 sm:px-4",
      }}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className=" hidden sm:flex justify-start items-center gap-1"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">{siteConfig.name}</p>
          </NextLink>
        </NavbarBrand>
        <NavbarContent className="sm:hidden basis-1 pl-4" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>
        <NavbarContent className="z-[500]">
          <ul className="hidden sm:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent className="flex basis-full" justify="end">
        {!!token ? (
          <UserDropdown sessionData={token} />
        ) : (
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href="/api/auth/signin"
            >
              Login
            </NextLink>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink color={"foreground"} href={item.href}>
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
