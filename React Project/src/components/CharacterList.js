import React, { useContext } from "react";
import { CharacterContext } from "../contexts/CharacterContexts";
import CharacterDetails from "./CharacterDetail";

const CharacterList = () => {
  const { characters } = useContext(CharacterContext);
  return characters.length ? (
    <div className="character-list">
      <ul>
        {characters.map((character) => {
          return <CharacterDetails character={character} key={character.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No More Characters Left</div>
  );
};

export default CharacterList;
