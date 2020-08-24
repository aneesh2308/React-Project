import React, { createContext, useReducer, useEffect } from "react";
import { characterReducer } from "../reducer/CharacterReducer";

export const CharacterContext = createContext();

const CharacterContextProvider = (props) => {
  const [characters, dispatch] = useReducer(
    characterReducer,
    [
      { title: "Gohan", power:20000.0,id: 1 },
      { title: "Son Goku",power:15000.0, id: 2 },
      { title: "Vegeta",power:10000.0, id: 3 },
      { title: "Picollo",power:8000.0, id: 4 }
    ]
    //   () => {
    //     const localData = localStorage.getItem("characters");
    //     return localData ? JSON.parse(localData) : [];
    //   }
    // );
    // useEffect(() => {
    //   localStorage.setItem("characters", JSON.stringify(character));
    // }, [character]
  );

  return (
    <CharacterContext.Provider value={{ characters, dispatch }}>
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;
