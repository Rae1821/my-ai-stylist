"use client";

import { Input } from "../ui/input";
import { fetchClothing } from "@/app/actions";
import { AddSearchButton } from "./AddSearchButton";
import { SearchProps } from "@/types";

const SearchBar = (props: SearchProps) => {
  // const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (searchItem === "") {
  //     alert("Please enter a clothing item to search");
  //   }
  //   setSearchItem(searchItem);
  // };

  return (
    <form action={fetchClothing}>
      <div className="flex">
        <Input
          type="text"
          name="searchItem"
          value={props.searchItem}
          placeholder="white peplum tops"
          className="rounded-r-none border-r-0 focus-visible:ring-0"
        />
        <AddSearchButton />
      </div>
    </form>
  );
};

export default SearchBar;
