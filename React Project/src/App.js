import React from "react";
import Navbar from "./components/NavBar";
import CharacterContextProvider from "./contexts/CharacterContexts";
import CharacterList from "./components/CharacterList";
import CharacterForm from "./components/CharacterForm";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <CharacterContextProvider>
        <Navbar />
        <CharacterList />
        <CharacterForm />
      </CharacterContextProvider>
    </div>
  );
}

export default App;
