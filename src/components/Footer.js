import axios from "axios";
import React, { useState, useEffect } from "react";

const Footer = () => {
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

  return (
    <div
      className="ui segment"
      style={{ bottom: 0, left: 0, position: "fixed", width: "100%" }}
    >
      <p>{copyright}</p>
    </div>
  );
};

export default Footer;
