"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="flex">
        <Input
          type="text"
          name="searchItem"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Peplum tops"
          className="rounded-r-none border-r-0 focus-visible:ring-0"
        />
        <Button
          variant="outline"
          size="icon"
          className="rounded-l-none border-l-0"
        >
          <Image
            src="/icons/magnifying-glass.svg"
            alt="search icon"
            width={20}
            height={20}
          />
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
