"use client";

import { FormEvent, useState } from "react";
import SearchBarmanufacturerComponent from "./SearchBarmanufacturer";
import Image from "next/image";

const SearchButtonComponent = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);
interface SearchBarComponentProps{
  setManufacturer: (searchManufacturer: string)=> void;
  setModel: (searchModel: string)=> void;
}

const SearchBarComponent = ({ setManufacturer, setModel }: SearchBarComponentProps) => {
  const [searchManufacturer, setSearchManufacturer] = useState(""); //make
  const [searchModel, setSearchModel] = useState("");

  const HandleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer.trim() === "" && searchModel.trim() === "") {
      return alert("Please provide some input");
    }

    setManufacturer(searchManufacturer);
    setModel(searchModel);
  };

  return (
    <form className="searchbar" onSubmit={HandleSearch}>
      <div className="searchbar__item">
        <SearchBarmanufacturerComponent
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButtonComponent otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src={"/model-icon.png"}
          alt="model icon"
          width={25}
          height={25}
          className="absolute w-[25px] h-[25px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButtonComponent otherClasses="sm:hidden" />
      </div>
      <SearchButtonComponent otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBarComponent;

