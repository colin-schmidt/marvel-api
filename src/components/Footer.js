import axios from "axios";
import React, { useState, useEffect } from "react";

const Footer = ({ character }) => {
  const [copyright, setCopyright] = useState("");

  const apiSearch = async () => {
    const { data } = await axios.get(
      "https://gateway.marvel.com/v1/public/characters",
      {
        params: {
          apikey: "745d1cce0c4bb368d4a02bf9a9b33cc9",
        },
      }
    );

    setCopyright(data.attributionText);
  };

  useEffect(() => {
    apiSearch();
  }, []);

  //helper variable to change footer's position based on length of character
  const footerPosition = character.length < 2 ? "fixed" : "static";

  return (
    <div
      className="ui segment"
      style={{
        bottom: 0,
        left: 0,
        position: `${footerPosition}`,
        width: "100%",
        zIndex: 10,
      }}
    >
      <p>{copyright}</p>
    </div>
  );
};

export default Footer;

//if (character.length === 1)
