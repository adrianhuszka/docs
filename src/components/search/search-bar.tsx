"use client";

import { Input } from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (search && search.length > 0) router.push(`?search=${search}`);
    else router.push(pathname);
  }, [search]);

  useEffect(() => {
    const handleKeyDown = (e: {
      ctrlKey: any;
      key: string;
      preventDefault: () => void;
    }) => {
      if (e.ctrlKey && e.key === "f") {
        e.preventDefault();
        if (inputRef && inputRef.current) inputRef.current.focus();
      } else if (e.key === "Escape") {
        if (inputRef && inputRef.current) {
          setSearch("");
          inputRef.current.blur();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Input
      ref={inputRef}
      type="search"
      variant="bordered"
      label="Keresés"
      onChange={(e) => setSearch(e.target.value)}
      value={search}
    />
  );
}
