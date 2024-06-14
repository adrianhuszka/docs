const Data = [
  {
    title: "HTML nyelv beállítása",
    desc: "Az alábbi példában látható, hogyan állítható be az HTML nyelv. Maga a HTML tag-ben kell elhelyezni az alábbiak szerint:",
    code: ['<html lang="hu"></html>'],
    showRes: false,
  },
  {
    title: "HTML oldal kódolása",
    desc: "Az alábbi példában látható, hogyan kell megadni a HTML oldal kódolását az alábbiak szerint, a meta tag-et minden esetben a head tag-en belül kell elhelyezni:",
    code: ['<head>\n\t...\n\t<meta charset="UTF-8">\n\t...\n</head>'],
    showRes: false,
  },
  {
    title: "HTML oldal címe",
    desc: "Az alábbi példában látható, hogyan kell megadni az HTML oldal címét az alábbiak szerint, a title tag-et minden esetben a head tag-en belül kell elhelyezni:",
    code: ["<head>\n\t...\n\t<title>HTML oldal címe</title>\n\t...\n</head>"],
    showRes: false,
  },
  {
    title: "HTML CSS fájl linkelése",
    desc: "Az alábbi példában látható, hogyan kell linkelni az HTML oldalhoz a CSS fájlt az alábbiak szerint, a link tag-et minden esetben a head tag-en belül kell elhelyezni:",
    code: [
      '<head>\n\t...\n\t<link rel="stylesheet" href="/fájlneve/">\n\t...\n</head>',
    ],
    showRes: false,
  },
  {
    title: "Címsorok",
    desc: "Az alábbi példában látható, hogyan kell címsorokat megadni az alábbiak szerint, különböző méretű címsorok léteznek 1-től 6-ig:",
    code: [
      "<h1>Címsor 1</h1>\n<h2>Címsor 2</h2>\n<h3>Címsor 3</h3>\n<h4>Címsor 4</h4>\n<h5>Címsor 5</h5>\n<h6>Címsor 6</h6>",
    ],
    showRes: true,
  },
  {
    title: "Bekezdések",
    desc: "Az alábbi példában látható, hogyan kell bekezdéseket létrehozni az oldalon:",
    code: ["<p>Ez egy bekezdés.</p>\n<p>Ez egy másik bekezdés.</p>"],
    showRes: true,
  },
  {
    title: "Félkövér szöveg HTML segítségével",
    desc: "Az alábbi példában látható, hogyan kell félkövér szöveget létrehozni HTML-ben:",
    code: ["<b>Félkövér szöveg</b>"],
    showRes: true,
  },
  {
    title: "Dőlt szöveg HTML segítségével",
    desc: " Az alábbi példában látható, hogyan kell dőlt szöveget megadni HTML-ben:",
    code: ["<i>Dőlt szöveg</i>"],
    showRes: true,
  },
  {
    title: "Aláhúzott szöveg HTML segítségével",
    desc: "Az alábbi példában látható, hogyan kell aláhúzott szöveget megadni az oldalon:",
    code: ["<u>Aláhúzott szöveg</u>"],
    showRes: true,
  },
  {
    title: "Link beszúrása",
    desc: "Az alábbi példában látható, hogyan kell egy linket beszúrni:",
    code: [
      'Sima link:\n<a href="https://www.example.com">Link szövege</a>',
      'Új oldalon nyílik meg:\n<a href="https://www.google.com" target="_blank">Google</a>',
      'Oldalon belöli link(anchor):\n<a href="#id">Ugrás az id-jű elemre</a>',
    ],
    showRes: true,
  },
  {
    title: "Kép beszúrása",
    desc: 'Az <span className="font-bold text-lg">img</span> tag segítségével lehet képet beszúrni az oldalra. Az <span className="font-bold text-lg">src</span> attribútumban kell megadni a kép elérési útját, az <span className="font-bold text-lg">alt</span> attribútumban pedig a kép leírását, amely akkor jelenik meg, ha a kép nem töltődik, a <span className="font-bold text-lg">title</span> attribútumban pedig a kép leírása jelenik meg, ha a felhasználó ráviszi az egeret a képre.<br />Az alábbi példában látható, hogyan kell egy képet beszúrni az oldalra:',
    code: ['<img src="kép.jpg" alt="Kép leírása" title="Kép leírása">'],
    showRes: true,
  },
  {
    title: "Táblázat létrehozása",
    desc: "Az alábbi példában látható, hogyan kell táblázatot létrehozni az oldalon:",
    code: [
      "<table>\n\t<tr>\n\t\t<th>Fejléc 1</th>\n\t\t<th>Fejléc 2</th>\n\t</tr>\n\t<tr>\n\t\t<td>Cella 1</td>\n\t\t<td>Cella 2</td>\n\t</tr>\n</table>",
    ],
    showRes: true,
  },
  {
    title: "Cellák egyesítése",
    desc: "Az alábbi példában látható, hogyan kell cellákat egyesíteni az oldalon sor- és oszlop szinten:",
    code: [
      "<table>\n\t<tr>\n\t\t<th>Fejléc 1</th>\n\t\t<th>Fejléc 2</th>\n\t</tr>\n\t<tr>\n\t\t<td colspan='2'>Cella 1 és 2</td>\n\t</tr>\n</table>",
      "<table>\n\t<tr>\n\t\t<th>Fejléc 1</th>\n\t\t<th>Fejléc 2</th>\n\t</tr>\n\t<tr>\n\t\t<td rowspan='2'>Cella 1 és 3</td>\n\t\t<td>Cella 2</td>\n\t</tr>\n\t<tr>\n\t\t<td>Cella 4</td>\n\t</tr>\n</table>",
    ],
    pics: [
      "../../imgs/webprog/Table_colspan.png",
      "../../imgs/webprog/Table_rowspan.png",
    ],
    showRes: true,
  },
];

export default Data;
