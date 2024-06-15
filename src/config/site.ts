export type navItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  navItems: navItem[];
  navMenuItems: navItem[];
};

export const siteConfig: SiteConfig = {
  name: "Docs",
  description: "",
  navItems: [
    {
      label: "Webprogramozás",
      href: "/webprog",
    },
  ],
  navMenuItems: [
    {
      label: "Főoldal",
      href: "/",
    },
    {
      label: "Webprogramozás",
      href: "/webprog",
    },
  ],
};
