import React from "react";
import Phones from "../Phones/Phones";
import Search from "../Search/Search";
import "./Main.css";
const Main = () => {
  return (
    <main className="container">
      <Search></Search>
      <Phones></Phones>
    </main>
  );
};

export default Main;
