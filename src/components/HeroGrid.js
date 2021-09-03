import React from "react";
import "./HeroGrid.css";

const HeroGrid = ({ character, setCharacter }) => {

  const apiResults = character == false ? null : character.data.results[0];

  if (apiResults) {
    return (
      <div className="ui link cards">
        <div className="ui card">
          <div className="image">
            <img
              alt="heroimg"
              src={`${apiResults.thumbnail.path}.${apiResults.thumbnail.extension}`}
            />
          </div>
          <div className="content">
            <a className="ui header massive">{apiResults.name}</a>
            <div className="appeared">
              <span>
                📚Has appeared in {apiResults.comics.available} comic books
              </span>
            </div>
            <div className="heroBio">
              {apiResults.description
                ? `🦸‍♂️${apiResults.description}`
                : "🦸‍♂️No bio available."}
            </div>
            <button className="ui button red" onClick={() => setCharacter([])}>
              Remove hero
            </button>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default HeroGrid;
