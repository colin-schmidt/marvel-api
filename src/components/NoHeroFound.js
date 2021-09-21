import React from "react";
import "./ErrorScreens.css";

const NoHeroFound = ({ noResults, setNoResults, duplicate }) => {
  //add && !duplicate below to avoid simult. rendering NoHeroFound and DuplicateHero
  if (noResults && !duplicate) {
    return (
      <div className="error-screen">
        <img
          className="hulk"
          src="images\confused-hulk.jpg"
          alt="Confused Hulk"
        ></img>
        <div>
          <h2>
            Sorry! We weren't able to find your hero. <br />
            Please verify that you spelled your hero's name right ( i.e.
            M.O.D.O.K. instead of MODOK )
          </h2>
          <button
            className="ui red massive button"
            onClick={() => (duplicate ? null : setNoResults(false))}
          >
            Back to my team
          </button>
        </div>
      </div>
    );
  } else return null;
};

export default NoHeroFound;
