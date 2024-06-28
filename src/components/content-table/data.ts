const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "CíM", uid: "title", sortable: true },
  { name: "LEíRÁS", uid: "description", sortable: true },
  { name: "CODE", uid: "code" },
  { name: "EREDMÉNY MUTATÁSA", uid: "showRes" },
  { name: "HTML-ID", uid: "id" },
  { name: "MŰVELETEK", uid: "actions" },
];

const users = [
  {
    title: "HTML nyelv beállítása",
    desc: "Az alábbi példában látható, hogyan állítható be az HTML nyelv. Maga a HTML tag-ben kell elhelyezni az alábbiak szerint:",
    code: ['<html lang="hu"></html>'],
    showRes: false,
    id: "html-nyelv",
  },
  {
    title: "HTML oldal kódolása",
    desc: "Az alábbi példában látható, hogyan kell megadni a HTML oldal kódolását az alábbiak szerint, a meta tag-et minden esetben a head tag-en belül kell elhelyezni:",
    code: ['<head>\n\t...\n\t<meta charset="UTF-8">\n\t...\n</head>'],
    showRes: false,
    id: "html-kodolas",
  },
  {
    title: "HTML oldal címe",
    desc: "Az alábbi példában látható, hogyan kell megadni az HTML oldal címét az alábbiak szerint, a title tag-et minden esetben a head tag-en belül kell elhelyezni:",
    code: ["<head>\n\t...\n\t<title>HTML oldal címe</title>\n\t...\n</head>"],
    showRes: false,
    id: "html-cim",
  },
];

export { columns, users };
