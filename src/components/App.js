import axios from "axios";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import HeroGrid from "./HeroGrid";
import NoHeroFound from "./NoHeroFound";
import LoadingSpinner from "./LoadingSpinner";
import DuplicateHero from "./DuplicateHero";
import Footer from "./Footer";

const App = () => {
  const [character, setCharacter] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [duplicate, setDuplicate] = useState(false);

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

    const checkDupe = (hero) => hero === data.data.results[0];

    const pushHero = () => {
      setCharacter((prevArray) => {
        if (prevArray.findIndex(checkDupe, character)) {
          return [data.data.results[0], ...prevArray];
        } else return null;
      });
    };

    console.log(character);

    //specifying id breaks confused hulk if character already has 1+ heroes, but does render spiderman
    for (let i = 0; i < character.length; i++) {
      if (data.data.results[0] && character[i].id === data.data.results[0].id) {
        setDuplicate(true);
        return null; // this prevents 2nd hero of same name from rendering!
      }
    }

    if (!data.data.results.length) {
      setNoResults(true);
    } else {
      pushHero(character);
      setNoResults(false); //stops rendering confused hulk if successful API call happens
    }
  };

  return (
    <div>
      <SearchBar
        onSubmit={onSearchSubmit}
        setLoading={setLoading}
        setNoResults={setNoResults}
      />
      <HeroGrid
        character={character}
        setCharacter={setCharacter}
        noResults={noResults}
        duplicate={duplicate}
      />
      <NoHeroFound noResults={noResults} setNoResults={setNoResults} />
      <LoadingSpinner loading={loading} />
      <DuplicateHero duplicate={duplicate} setDuplicate={setDuplicate} />
      <Footer />
    </div>
  );
};

export default App;
