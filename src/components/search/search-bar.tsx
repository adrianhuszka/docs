"use client";

import { Input } from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (search) router.push(`?search=${search}`);
    else router.push(pathname);
  }, [search]);

  return (
    <Input
      type="search"
      variant="bordered"
      label="Keresés"
      onChange={(e) => setSearch(e.target.value)}
      value={search}
    />
  );
}
