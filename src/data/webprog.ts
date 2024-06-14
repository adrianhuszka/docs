const Data = [
  {
    category: "html",
    categoryTitle: "HTML",
    data: [
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
        code: [
          "<head>\n\t...\n\t<title>HTML oldal címe</title>\n\t...\n</head>",
        ],
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
        desc: 'Az <span class="font-bold text-lg">img</span> tag segítségével lehet képet beszúrni az oldalra. Az <span class="font-bold text-lg">src</span> attribútumban kell megadni a kép elérési útját, az <span class="font-bold text-lg">alt</span> attribútumban pedig a kép leírását, amely akkor jelenik meg, ha a kép nem töltődik, a <span class="font-bold text-lg">title</span> attribútumban pedig a kép leírása jelenik meg, ha a felhasználó ráviszi az egeret a képre.<br />Az alábbi példában látható, hogyan kell egy képet beszúrni az oldalra:',
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
        showRes: true,
      },
      {
        title: "Listák",
        desc: "Az alábbi példában látható, hogyan kell rendeyett és rendezettlen listát létrehozni:",
        code: [
          "Rendezett lista:\n<ol>\n\t<li>Elem 1</li>\n\t<li>Elem 2</li>\n</ol>",
          "Rendezetlen lista:\n<ul>\n\t<li>Elem 1</li>\n\t<li>Elem 2</li>\n</ul>",
        ],
        showRes: true,
      },
    ],
  },
  {
    category: "css",
    categoryTitle: "CSS Formázások",
    data: [
      {
        title: "Háttérkép beállítása CSS segítségével",
        desc: "Az alábbi példában látható, hogyan kell háttérképet beállítani CSS segítségével:",
        code: ["background-image: url('háttérkép.jpg')"],
        showRes: false,
      },
      {
        title: "Háttérkép tulajdonságai - ismétlődés",
        desc: "Az alábbi példában látható, hogyan kell háttérkép ismétlődését és méretét beállítani CSS segítségével<br />Az ismétlődés lehet:<br />no-repeat - nincs ismétlődés<br />repeat - ismétlődik minden irányba<br />repeat-x - csak horizontálisan ismétlődik<br />repeat-y - csak vertikálisan ismétlődik<br />Egy példa:",
        code: ["background-repeat: no-repeat;"],
      },
      {
        title: "Háttérkép tulajdonságai - pozíció",
        desc: "Az alábbi példában látható, hogyan kell háttérkép pozícióját beállítani CSS segítségével<br />Az pozíció lehet:<br />left - balra igazítja<br />right - jobbra igazítja<br />top - felülre igazítja<br />bottom - alulra igazítja<br />center - középre igazítja<br />Egy példa:",
        code: ["background-position: center;"],
      },
      {
        title: "Háttérkép tulajdonságai - méret",
        desc: "Az alábbi példában látható, hogyan kell háttérkép méretét beállítani CSS segítségével<br />Az méret lehet:<br />cover - a kép mindig kitölti a háttérteret, de nem torzul<br />contain - a kép mindig látszik, de nem feltétlenül tölti ki a háttérteret<br />auto - a kép mérete automatikusan állítódik<br />Egy példa:",
        code: ["background-size: cover;"],
      },
      {
        title: "Szöveg formázása",
        desc: "Az alábbi példában látható, hogyan kell szöveget formázni CSS segítségével<br />Egy pár példa:",
        code: [
          "color: red; /* szöveg színe */",
          "font-size: 16px; /* szöveg mérete */",
          "font-family: Arial, sans-serif; /* szöveg betűtípusa */",
          "font-weight: bold; /* szöveg vastagsága */",
          "text-align: center; /* szöveg igazítása */",
          "text-decoration: underline; /* szöveg aláhúzása */",
          "font-style: italic; /* szöveg dőltté tétele */",
        ],
      },
      {
        title: "Margó beállítása",
        desc: "Az alábbi példában látható, hogyan kell margót beállítani CSS segítségével<br />A margót lehet külön-külön minden oldalát állítani vagy egyben is<br />margin: 5px; - minden oldal<br />margin-left: 5px; - bal margó 5 pixel<br />margin-right: 5px; - jobb margó 5 pixel<br />margin-top: 5px; - felső margó 5 pixel<br />margin-bottom: 5px; - alsó margó 5 pixel<br />Egy példa:",
        code: ["margin: 10px;"],
      },
      {
        title: "Padding/belső margó/bélés beállítása",
        desc: "Az alábbi példában látható, hogyan kell paddinget beállítani CSS segítségével<br />A paddinget lehet külön-külön minden oldalát állítani vagy egyben is<br />padding: 5px; - minden oldal<br />padding-left: 5px; - bal padding 5 pixel<br />padding-right: 5px; - jobb padding 5 pixel<br />padding-top: 5px; - felső padding 5 pixel<br />padding-bottom: 5px; - alsó padding 5 pixel<br />Egy példa:",
        code: ["padding: 10px;"],
      },
      {
        title: "Szöveg igazítása",
        desc: "Az alábbi példában látható, hogyan kell szöveget igazítani CSS segítségével:<br />Az igazítás lehet:<br />left - balra igazítás<br />right - jobbra igazítás<br />center - középre igazítás<br />justify - sorkizárt igazítás<br />Egy példa:",
        code: ["text-align: justify;"],
      },
      {
        title: "Border, Keret beállítása",
        desc: "Az alábbi példában látható, hogyan kell keretet beállítani CSS segítségével:<br />Egy példa egy 1 pixel(képpont) vastag folyamatos fekete keret beállítására:",
        code: ["border: 1px solid #000000;"],
      },
      {
        title: "Kerekített sarkok beállítása",
        desc: "Az alábbi példában látható, hogyan kell kerekített sarkokat beállítani CSS segítségével:<br />A kerekített sarkokat lehet külön-külön minden oldalát állítani vagy egyben is<br />border-radius: 5px; - minden oldal<br />border-top-left-radius: 5px; - bal felső sarok 5 pixel<br />border-top-right-radius: 5px; - jobb felső sarok 5 pixel<br />border-bottom-left-radius: 5px; - bal alsó sarok 5 pixel<br />border-bottom-right-radius: 5px; - jobb alsó sarok 5 pixel<br />Egy példa:",
        code: ["border-radius: 10px;"],
      },
      {
        title: "Alapértelmezett stílusok eltávolítása",
        desc: "Az alábbi példában látható, hogyan lehet eltávolítani az alapértelmezett stílusokat egy elemről CSS segítségével:<br />Egy példa:",
        code: ["text-decoration: none;"],
      },
      {
        title: "Hover - kurzor elem fölé húzásakor változtozzon az elem",
        desc: "Az alábbi példában látható, hogyan kell hover hatást beállítani CSS segítségével<br />Miden tag-nek megadhatjuk a :hover kiegészítőt, amellyel módosítható az elem amikor a kurzor fölé kerül<br />Egy példa:",
        code: ["a:hover { color: red; }"],
      },
    ],
  },
  {
    category: "css",
    categoryTitle: "CSS Szelektorok",
    data: [
      {
        title: "CSS szelektorok - beépített elem kiválasztása",
        desc: "Az alábbi példában látható, hogyan kell beépített elemeket kiválasztani CSS segítségével<br />Az alábbi példában a <span class='text-red-700 font-bold text-lg'>p</span> elemeket kiválasztjuk:<br />Egy példa:",
        code: ["p { color: red; }"],
      },
      {
        title: "CSS szelektorok - ID/azonosító/egyedi azonosító kiválasztása",
        desc: "Az alábbi példában látható, hogyan kell ID alapján kiválasztani elemeket CSS segítségével<br />Az alábbi példában az <span class='text-red-700 font-bold text-lg'>#id</span> ID-jű elemet kiválasztjuk:<br />Egy példa:",
        code: ["#id { color: red; }"],
      },
      {
        title: "CSS szelektorok - osztály/osztály azonosító/class kiválasztása",
        desc: "Az alábbi példában látható, hogyan kell osztály alapján kiválasztani elemeket CSS segítségével<br />Az alábbi példában az <span class='text-red-700 font-bold text-lg'>.osztály</span> osztályú elemeket kiválasztjuk:<br />Egy példa:",
        code: [".class { color: red; }"],
      },
      {
        title: "CSS szelektorok - gyerek elemek kiválasztása",
        desc: "Az alábbi példában látható, hogyan kell gyerek elemeket kiválasztani CSS segítségével<br />Az alábbi példában a <span class='text-red-700 font-bold text-lg'>div</span> elem <span class='text-red-700 font-bold text-lg'>p</span> gyerek elemét szeretnénk formázni<br />Egy példa:",
        code: ["div p { color: red; }"],
      },
    ],
  },
];

export default Data;
