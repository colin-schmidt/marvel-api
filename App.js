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
  };

  return (
    <div>
      <SearchBar onSubmit={onSearchSubmit} />
      <HeroGrid characterName={character} />
    </div>
  );
};

export default App;

//Add dotted line empty segments to the rest of the grid if less than 6 heroes are present
//Make reroll run the api fetch again
//Figure out how to access results of a 2nd api request while maintaining the data from the first
