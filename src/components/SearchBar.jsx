"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const handleSearch = () => {
    e.preventDefault();
    const formData = new formData(e.currenTarget);
    const name = formData.get("name");

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      className="flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <FontAwesomeIcon icon={faMagnifyingGlass} width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
