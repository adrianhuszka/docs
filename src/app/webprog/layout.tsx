import SidebarLayout from "@/components/layout/sidebar-layout";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <SidebarLayout
          target={[
            {
              title: "Login",
              anchor: "html-lang",
            },
            {
              title: "Register",
              anchor: "register",
            },
          ]}
        />
        <div className="">{children}</div>
      </div>
    </>
  );
}
