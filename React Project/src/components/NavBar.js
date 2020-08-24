import React, { useContext } from "react";
import { CharacterContext } from "../contexts/CharacterContexts";

const NavBar = () => {
  const { characters } = useContext(CharacterContext);
  return (
    <div className="navbar">
      <h1>DBZ Character PowerLevel</h1>
      <p>Currently you have {characters.length} character to go through ...</p>
    </div>
  );
};

export default NavBar;
