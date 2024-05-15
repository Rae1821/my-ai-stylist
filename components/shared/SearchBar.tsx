"use client";

// import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { AddSearchButton } from "./AddSearchButton";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchItem === "") {
      return alert("Please fill in the search bar");
    }

    updateSearchParams(searchItem.toLowerCase());
  };

  const updateSearchParams = (searchItem: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (searchItem) {
      searchParams.set("searchItem", searchItem);
    } else {
      searchParams.delete("searchItem", searchItem);
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="flex">
        <Input
          type="text"
          name="searchItem"
          placeholder="white peplum tops"
          className="rounded-r-none border-r-0 focus-visible:ring-0"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <AddSearchButton />
      </div>
    </form>
  );
};

export default SearchBar;

// const [state, formAction] = useFormState(fetchClothing, initialState);

// import { useFormState } from "react";
// import { ClothingProps } from "@/types";
