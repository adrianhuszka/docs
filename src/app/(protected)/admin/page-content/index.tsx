"use client";

import DataTable from "@/components/content-table/table";
import { useGetCategories } from "@/query/page-content/get-categories";
import { Tabs, Tab } from "@nextui-org/react";

export default function PageContentIndex() {
  const { data, error, fetchStatus, refetch } = useGetCategories();

  return (
    <div className="flex w-full flex-col p-8">
      <Tabs aria-label="Options" fullWidth size="md">
        {data.map((category: any) => (
          <Tab key={category.id} title={category.category}>
            <DataTable categoryId={category.id} />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
