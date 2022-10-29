import React, { useState } from "react";
import Header from "../Header";
import Pokedex from "../Pokedex";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="container">
      <Header setSearchValue={setSearchValue} />
      <Pokedex searchValue={searchValue} />
    </div>
  );
};

export default Home;
