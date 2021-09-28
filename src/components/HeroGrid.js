import React from "react";
import "./HeroGrid.css";

const HeroGrid = ({ character, setCharacter, noResults, duplicate }) => {
  //create shallow copy of character for use in onClick below
  const characterWithout = [...character];

  if (character.length > 0 && !noResults && !duplicate) {
    return character.map((arr) => (
      <div className="ui three column grid">
        <div className="row">
          <div classname="column">
            <div className="ui cards" key={arr.name}>
              <div className="ui card">
                <div className="image">
                  <img
                    alt="heroimg"
                    src={`${arr.thumbnail.path}.${arr.thumbnail.extension}`}
                  />
                </div>
                <div className="content">
                  <p className="ui header massive">{arr.name}</p>
                  <div className="appeared">
                    <span>
                      📚Has appeared in {arr.comics.available} comic books
                    </span>
                  </div>
                  <div className="heroBio">
                    {arr.description
                      ? `🦸‍♂️${arr.description}`
                      : "🦸‍♂️No bio available."}
                  </div>
                  <button
                    className="button"
                    onClick={() => {
                      const index = characterWithout.indexOf(arr);
                      if (index !== -1) {
                        characterWithout.splice(index, 1);
                        setCharacter(characterWithout);
                      }
                    }}
                  >
                    Remove hero
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  } else return null;
};

export default HeroGrid;
