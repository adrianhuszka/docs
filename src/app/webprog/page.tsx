import "./style.css";
import Data from "../../data/webprog";
import React from "react";
import CardMain from "@/components/card/card-main";
import { WebprogData } from "@/types";
import SearchBar from "@/components/search/search-bar";

export default async function WebprogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const filteredData = Data.map((items) => {
    if (!search) return items;
    return {
      ...items,
      data: items.data.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.desc.toLowerCase().includes(search.toLowerCase()) ||
          item.code.some((code) =>
            code.toLowerCase().includes(search.toLowerCase())
          )
      ),
    };
  }).filter((items) => items.data.length > 0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between w-screen">
      <div className="z-10 w-full max-w-5xl font-mono text-start flex flex-col gap-10 md:gap-5">
        <SearchBar />
        {filteredData.map((items: WebprogData, index) => (
          <CardMain key={index} items={items} />
        ))}
      </div>
    </div>
  );
}
