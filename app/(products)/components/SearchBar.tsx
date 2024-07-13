"use client";

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
    // create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // update or delete the 'searchitem' search parameter bades on the 'searchitem' value
    if (searchItem) {
      searchParams.set("searchItem", searchItem);
    } else {
      searchParams.delete("searchItem", searchItem);
    }

    // generate the new pathname with the updated search parameters
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
