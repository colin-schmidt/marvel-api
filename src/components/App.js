import axios from "axios";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import HeroGrid from "./HeroGrid";
import NoHeroFound from "./NoHeroFound";

const App = () => {
  const [character, setCharacter] = useState([]);
  const [noResults, setNoResults] = useState(false);

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

    console.log(character);

    const pushHero = () => {
      setCharacter(prevArray => [...prevArray, data])
    }

    if (character == []) {
      setCharacter(data);
    } else {
      setCharacter(prevArray => [...prevArray, data])
    }

    if (!data.data.results.length) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
    console.log(character);
  };

  return (
    <div>
      <SearchBar onSubmit={onSearchSubmit} />
      <HeroGrid
        character={character}
        setCharacter={setCharacter}
        setNoResults={setNoResults}
      />
      <NoHeroFound noResults={noResults} />
    </div>
  );
};

export default App;
