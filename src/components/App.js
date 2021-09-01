import axios from "axios";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import HeroGrid from "./HeroGrid";


const App = () => {
  const [character, setCharacter] = useState("");

  const onSearchSubmit = async (input) => {
    const { data } = await axios.get(
      "https://gateway.marvel.com/v1/public/characters",
      {
        params: {
          name: input,
          apikey: "745d1cce0c4bb368d4a02bf9a9b33cc9",
        },
      }
    );
    setCharacter(data);
    console.log(data.data.results);
  };

  return (
    <div>
      <SearchBar onSubmit={onSearchSubmit} />
      <HeroGrid characterName={character} setCharacter={setCharacter} />
    </div>
  );
};

export default App;
/*

Error screen:

For an incorrect hero name:
-if API call doesn't have "results" --> display FailedSearch

For a 404 or actual API failure:
-look at Marvel API docs, is there an error message that I could set to state, then display?

*/
