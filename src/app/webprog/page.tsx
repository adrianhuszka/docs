import { Code, Divider, Snippet } from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./style.css";
import Data from "../../data/webprog";
import React from "react";

export default function Webprog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl font-mono text-start">
        {Data.map((items) =>
          items.data.map((item, index) => (
            <div key={index}>
              <h1 className="text-lg font-bold">{item.title}</h1>
              <p
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: item.desc }}
              ></p>
              {
                <div>
                  {item.code.map((code, index) => (
                    <React.Fragment key={index}>
                      <SyntaxHighlighter
                        language={items.category}
                        style={solarizedlight}
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
              <Divider />
            </div>
          ))
        )}
      </div>
    </main>
  );
}
