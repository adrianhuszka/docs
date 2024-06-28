import { AdminContextLayout } from "@/components/layout/admin-layout";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-center justify-center w-full">
      <AdminContextLayout>{children}</AdminContextLayout>
    </div>
  );
}
