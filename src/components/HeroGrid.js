import React from "react";
import "./HeroGrid.css";

const HeroGrid = ({ character, setCharacter, noResults, duplicate }) => {
  // const removeHero = (e) => {
  //   const characterWithout = [...character];
  //   const index = characterWithout.indexOf(); //position of hero I want to delete;
  //   if (index !== -1) {
  //     //splice removes 1 element @ position of index from characterWithout
  //     characterWithout.splice(index, 1);
  //     setCharacter(characterWithout);
  //   }
  // };

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
            <button
              className="ui button red"
              onClick={(e) => {
                const characterWithout = [...character];
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
    ));
  } else return null;
};

export default HeroGrid;

/*
State shouldn't be mutated directly, so make a copy of state:
const characterWithout = [...character];

const index = characterWithout.indexOf(*DON'T KNOW WHAT TO PUT HERE*)

instead of e.target.value above, could I put the whole JSON blob?

*********************
Need a way to reference an element from character based on which remove button I click

if (characterWithout[x].name === arr.name) {
  remove character[x] from characterWithout;
  setCharacter(characterWithout);
}





if (index !== -1) {
  characterWithout.splice(index)
}

if card character's name includes data.data.results[0].name, remove it

onClick={() => setCharacter([characterWithout])}

*/
