import axios from "axios";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import HeroGrid from "./HeroGrid";
import NoHeroFound from "./NoHeroFound";
import LoadingSpinner from "./LoadingSpinner";
import DuplicateHero from "./DuplicateHero";

const App = () => {
  const [character, setCharacter] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [duplicate, setDuplicate] = useState(false);

  // const spinnerHelper = () => {
  //   if (character.length > 0) {
  //     setLoading(false);
  //   }
  // };

  const onSearchSubmit = async (input) => {
    setLoading(true);

    const { data } = await axios.get(
      "https://gateway.marvel.com/v1/public/characters",
      {
        params: {
          name: input,
          apikey: "745d1cce0c4bb368d4a02bf9a9b33cc9",
        },
      }
    );

    setLoading(false);

    // character.map((currentHero) => {
    //   if (data.id === currentHero.id) {
    //     setDuplicate(true);
    //   }
    // });

    const pushHero = () => {
      setCharacter((prevArray) => [...prevArray, data.data.results[0]]);
    };

    if (!data.data.results.length) {
      setNoResults(true);
    } else {
      pushHero();
      setNoResults(false); //stops rendering confused hulk if successful API call happens
    }
  };

  console.log(character.keys());

  return (
    <div>
      <SearchBar onSubmit={onSearchSubmit} setLoading={setLoading} />
      <HeroGrid
        character={character}
        setCharacter={setCharacter}
        noResults={noResults}
      />
      <NoHeroFound noResults={noResults} setNoResults={setNoResults} />
      <LoadingSpinner loading={loading} />
      <DuplicateHero duplicate={duplicate} setDuplicate={setDuplicate} />
    </div>
  );
};

export default App;
