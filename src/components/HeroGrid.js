import React from "react";
import "./HeroGrid.css";

const HeroGrid = ({ character, setCharacter, noResults, duplicate }) => {

  if (character.length > 0 && !noResults && !duplicate) {
    return character.map((arr) => (
      <div className="ui link cards" key={arr.name}>
        <div className="ui card">
          <div className="image">
            <img
              alt="heroimg"
              src={`${arr.thumbnail.path}.${arr.thumbnail.extension}`}
            />
          </div>
          <div className="content">
            <a className="ui header massive">{arr.name}</a>
            <div className="appeared">
              <span>📚Has appeared in {arr.comics.available} comic books</span>
            </div>
            <div className="heroBio">
              {arr.description ? `🦸‍♂️${arr.description}` : "🦸‍♂️No bio available."}
            </div>
            <button className="ui button red" onClick={() => setCharacter([])}>
              Remove hero
            </button>
          </div>
        </div>
      </div>
    ));
  } else return null;
};

export default HeroGrid;

//use map for this?:
//if this element in character has the same whatever as another element, return spiderman pointing, else
//return above card
