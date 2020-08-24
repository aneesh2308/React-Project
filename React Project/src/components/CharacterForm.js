import React, { useContext, useState } from "react";
import { CharacterContext } from "../contexts/CharacterContexts";

const CharacterForm = () => {
  const { dispatch } = useContext(CharacterContext);
  const [title, setTitle] = useState("");
  const [power, setPower] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, power);
    dispatch({
      type: "ADD_BOOK",
      character: {
        title,
        power
      }
    });
    setTitle("");
    setPower("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="character name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Power level"
        value={power}
        onChange={(e) => setPower(e.target.value)}
        required
      />
      <input type="submit" value="add character" />
    </form>
  );
};

export default CharacterForm;
