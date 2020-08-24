import React, { useContext } from "react";
import { CharacterContext } from "../contexts/CharacterContexts";

const CharacterDetails = ({ character }) => {
  const { dispatch } = useContext(CharacterContext);
  return (
    <li onClick={() => dispatch({ type: "REMOVE_CHARACTER", id: character.id })}>
      <div className="title">{character.title}</div>
      <div className="power">{character.power}</div>
    </li>
  );
};

export default CharacterDetails;
