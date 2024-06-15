import { Card, CardHeader } from "@nextui-org/react";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { WebprogDataItem } from "@/types";
import { materialDark as style } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CardInner({
  item,
  category,
}: {
  item: WebprogDataItem;
  category: string;
}) {
  return (
    <Card className="p-5 z-2 anchor-offset" id={item.id}>
      <CardHeader className="text-lg font-bold">{item.title}</CardHeader>
      <p
        className="text-sm"
        dangerouslySetInnerHTML={{ __html: item.desc }}
      ></p>
      {
        <div>
          {item.code.map((code, index) => (
            <React.Fragment key={index}>
              <SyntaxHighlighter
                language={category}
                className="rounded-lg"
                style={style}
                key={index}
              >
                {code}
              </SyntaxHighlighter>
              {item.showRes && (
                <div className="my-4">
                  <h2 className="text-lg font-bold">Eredmény: </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: code }}
                    className="ms-7"
                  ></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      }
    </Card>
  );
}
