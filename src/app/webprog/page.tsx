import { Card, CardHeader } from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark as style } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./style.css";
import Data from "../../data/webprog";
import React from "react";

export default function Webprog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl font-mono text-start flex flex-col gap-10 md:gap-5">
        {Data.map((item, index) => (
          <Card key={index} className="p-2 z-2" id={item.id}>
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
                      language="html"
                      className="rounded-lg"
                      style={style}
                      key={index}
                    >
                      {code}
                    </SyntaxHighlighter>
                    {item.showRes && (
                      <div className="my-4">
                        <h2 className="text-lg font-bold">Eredmény: </h2>
                        <div dangerouslySetInnerHTML={{ __html: code }}></div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            }
          </Card>
        ))}
      </div>
    </main>
  );
}
