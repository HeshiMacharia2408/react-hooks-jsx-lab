import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  return (
    <div id="Home">
      <h2 style={{color: 'firebrick'}}>{name} is a Web Developer from {city}</h2>
    </div>
  );
}

export default Home;
