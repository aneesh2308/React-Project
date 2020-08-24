import React, { createContext, useReducer, useEffect } from "react";
import { characterReducer } from "../reducer/CharacterReducer";

export const CharacterContext = createContext();

const CharacterContextProvider = (props) => {
  const [characters, dispatch] = useReducer(
    characterReducer,
    [
      { title: "Gohan", id: 1 },
      { title: "Son Goku", id: 2 },
      { title: "Vegeta", id: 3 },
      { title: "Picollo", id: 4 }
    ]
    //   () => {
    //     const localData = localStorage.getItem("books");
    //     return localData ? JSON.parse(localData) : [];
    //   }
    // );
    // useEffect(() => {
    //   localStorage.setItem("books", JSON.stringify(books));
    // }, [books]
  );

  return (
    <CharacterContext.Provider value={{ characters, dispatch }}>
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;
