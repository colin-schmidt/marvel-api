import React from "react";
import "./HeroGrid.css";

const HeroGrid = ({ character, setCharacter, noResults, duplicate }) => {
  //create shallow copy of character for use in onClick below
  const characterWithout = [...character];

  if (character.length > 0 && !noResults && !duplicate) {
    return character.map((arr) => (
      <div className="ui centered cards">
        <div className="ui card" key={arr.name}>
          <div className="image">
            <img
              alt="heroimg"
              src={`${arr.thumbnail.path}.${arr.thumbnail.extension}`}
            />
          </div>
          <div className="content">
            <p className="ui large header">{arr.name}</p>
            <div className="appeared">
              <span>📚Has appeared in {arr.comics.available} comic books</span>
            </div>
            <div className="heroBio">
              {arr.description ? `🦸‍♂️${arr.description}` : "🦸‍♂️No bio available."}
            </div>
          </div>
          <div
            class="ui bottom attached red button"
            onClick={() => {
              const index = characterWithout.indexOf(arr);
              if (index !== -1) {
                characterWithout.splice(index, 1);
                setCharacter(characterWithout);
              }
            }}
          >
            <i class="minus icon"></i>
            Remove Hero
          </div>
        </div>
      </div>
    ));
  } else return null;
};

export default HeroGrid;

/*

                onClick={() => {
                  const index = characterWithout.indexOf(arr);
                  if (index !== -1) {
                    characterWithout.splice(index, 1);
                    setCharacter(characterWithout);
                  }
                }}

*/
