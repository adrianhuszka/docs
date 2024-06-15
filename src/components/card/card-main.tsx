import { WebprogData } from "@/types";
import { Divider } from "@nextui-org/react";
import React from "react";
import CardInner from "./card-inner";

export default function CardMain({ items }: { items: WebprogData }) {
  return (
    <>
      <Divider />
      <h1
        key={items.categoryTitle}
        className="text-4xl font-bold uppercase text-center"
      >
        {items.categoryTitle}
      </h1>
      <Divider />
      {items.data.map((item) => (
        <CardInner key={item.id} item={item} category={items.category} />
      ))}
    </>
  );
}
