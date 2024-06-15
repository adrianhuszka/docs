import SidebarLayout from "@/components/layout/sidebar-layout";
import Data from "../../data/webprog";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const target = Data.map((items) => ({
    category: items.categoryTitle,
    data: items.data.map((item) => ({
      title: item.title,
      anchor: item.id,
    })),
  }));

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <SidebarLayout target={target} />
        <div>{children}</div>
      </div>
    </>
  );
}
