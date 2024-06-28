import { WebprogDataItem } from "@/types";
import { Chip, Button, Tooltip } from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";
import { EyeIcon } from "../icons/table/eye-icon";

export default function RenderCell({
  item,
  columnKey,
}: {
  item: WebprogDataItem;
  columnKey: React.Key;
}) {
  const cellValue = item[columnKey as keyof WebprogDataItem];

  switch (columnKey) {
    case "title":
      return (
        <div className="flex flex-col">
          <p className="text-bold text-small capitalize">{item.title}</p>
        </div>
      );
    case "description":
      return (
        <div className="flex flex-col">
          <p className="text-bold text-small capitalize">{item.description}</p>
        </div>
      );
    case "code":
      return (
        <div className="flex flex-col">
          <p className="text-bold text-small capitalize">{item.code}</p>
        </div>
      );
    case "showRes":
      return (
        <Chip
          className="capitalize"
          color={item.showRes ? "success" : "danger"}
          size="sm"
          variant="flat"
        >
          {cellValue ? "Igen" : "Nem"}
        </Chip>
      );

    case "actions":
      return (
        <div className="relative flex justify-end items-center gap-2">
          <div>
            <Tooltip content="Megtekintés" color="primary">
              <Button
                onClick={() => console.log("Megtekintés", item.id)}
                isIconOnly
                aria-label="Megtekintés"
                variant="light"
                color="primary"
              >
                <EyeIcon size={20} fill="#979797" />
              </Button>
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Szerkesztés" color="secondary">
              <Button
                onClick={() => console.log("Szerkesztés", item.id)}
                isIconOnly
                aria-label="Szerkesztés"
                variant="light"
                color="secondary"
              >
                <EditIcon size={20} fill="#979797" />
              </Button>
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Törlés" color="danger">
              <Button
                onClick={() => console.log("Törlés", item.id)}
                isIconOnly
                aria-label="Törlés"
                variant="light"
                color="danger"
              >
                <DeleteIcon size={20} fill="#FF0080" />
              </Button>
            </Tooltip>
          </div>
        </div>
      );
    default:
      if (typeof cellValue === "string" || typeof cellValue === "number")
        return cellValue;
  }
}
