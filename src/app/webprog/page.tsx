import { Code, Divider, Snippet } from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Webprog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl font-mono text-start">
        <h1 className="text-lg font-bold ">HTML nyelv beállítása</h1>
        <p className="text-sm">
          Az alábbi példában látható, hogyan állítható be az HTML nyelv. Maga a
          HTML tag-ben kell elhelyezni az alábbiak szerint:
        </p>
        <SyntaxHighlighter language="html" style={solarizedlight}>
          {`<html lang="hu"></html>`}
        </SyntaxHighlighter>
        <hr />
        <h1 className="text-lg font-bold">HTML oldal kódolása</h1>
        <p className="text-sm">
          Az alábbi példában látható, hogyan kell megadni a HTML oldal kódolását
          az alábbiak szerint, a meta tag-et minden esetben a head tag-en belül
          kell elhelyezni:
        </p>
        <SyntaxHighlighter language="html" style={solarizedlight}>
          {`<head>
  ...
  <meta charset="UTF-8">
  ...
</head>`}
        </SyntaxHighlighter>
        <hr />
        <h1 className="text-lg font-bold">HTML oldal címe</h1>
        <p className="text-sm">
          Az alábbi példában látható, hogyan kell megadni az HTML oldal címét az
          alábbiak szerint, a title tag-et minden esetben a head tag-en belül
          kell elhelyezni:
        </p>
        <SyntaxHighlighter language="html" style={solarizedlight}>
          {`<head>
  ...
  <title>HTML oldal címe</title>
  ...
</head>`}
        </SyntaxHighlighter>
        <hr />
        <h1 className="text-lg font-bold">HTML CSS fájl linkelése</h1>
        <p className="text-sm">
          Az alábbi példában látható, hogyan kell linkelni az HTML oldalhoz a
          CSS fájlt az alábbiak szerint, a link tag-et minden esetben a head
          tag-en belül kell elhelyezni:
        </p>
        <SyntaxHighlighter language="html" style={solarizedlight}>
          {`<head>
  ...
  <link rel="stylesheet" href="/fájlneve/">
  ...
</head>`}
        </SyntaxHighlighter>
        <hr />
        <h1 className="text-lg font-bold">Címsorok</h1>
        <p className="text-sm">
          Az alábbi példában látható, hogyan kell címsorokat megadni az alábbiak
          szerint, különböző méretű címsorok léteznek 1-től 6-ig:
        </p>
        <SyntaxHighlighter language="html" style={solarizedlight}>
          {`<h1>Címsor 1</h1>
<h2>Címsor 2</h2>
<h3>Címsor 3</h3>
<h4>Címsor 4</h4>
<h5>Címsor 5</h5>
<h6>Címsor 6</h6>`}
        </SyntaxHighlighter>
        <hr />
        <h1 className="text-lg font-bold">Bekezdések</h1>
        <p className="text-sm">
          Az alábbi példában látható, hogyan kell bekezdéseket létrehozni az
          oldalon:
        </p>
        <SyntaxHighlighter language="html" style={solarizedlight}>
          {`<p>Ez egy bekezdés.</p>`}
        </SyntaxHighlighter>
        <hr />
        <h1 className="text-lg font-bold">Félkövér szöveg HTML segítségével</h1>
        <p className="text-sm">
          Az alábbi példában látható, hogyan kell félkövér szöveget létrehozni
          HTML-ben:
        </p>
        <SyntaxHighlighter language="html" style={solarizedlight}>
          {`<b>Félkövér szöveg</b>`}
        </SyntaxHighlighter>
        <hr />
        <h1 className="text-lg font-bold">Dőlt szöveg HTML segítségével</h1>
        <p className="text-sm">
          Az alábbi példában látható, hogyan kell dőlt szöveget megadni
          HTML-ben:
        </p>
        <SyntaxHighlighter language="html" style={solarizedlight}>
          {`<i>Dőlt szöveg</i>`}
        </SyntaxHighlighter>
        <hr />
        <h1 className="text-lg font-bold">
          Aláhúzott szöveg HTML segítségével
        </h1>
        <p className="text-sm">
          Az alábbi példában látható, hogyan kell aláhúzott szöveget megadni az
          oldalon:
        </p>
        <SyntaxHighlighter language="html" style={solarizedlight}>
          {`<u>Aláhúzott szöveg</u>`}
        </SyntaxHighlighter>
        <hr />
        <h1 className="text-lg font-bold">Link beszúrása</h1>
        <p className="text-sm">
          Az alábbi példában látható, hogyan kell egy alap linket beszúrni:
        </p>
        <SyntaxHighlighter language="html" style={solarizedlight}>
          {`<a href="https://www.google.com">Google</a>`}
        </SyntaxHighlighter>
        <p className="text-sm">
          Az alábbi példában látható, hogyan kell egy linket beszúrni, amely új
          oldalon nyílik meg:
        </p>
        <SyntaxHighlighter language="html" style={solarizedlight}>
          {`<a href="https://www.google.com" target="_blank">Google</a>`}
        </SyntaxHighlighter>
        <p className="text-sm">
          Az alábbi példában látható, hogyan kell egy linket beszúrni, amely egy
          adott id-jű elemre mutat (más néven anchor link):
        </p>
        <SyntaxHighlighter language="html" style={solarizedlight}>
          {`<a href="#id">Ugrás az id-jű elemre</a>`}
        </SyntaxHighlighter>
      </div>
    </main>
  );
}
