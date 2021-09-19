import React from "react";
import "./ErrorScreens.css";

const DuplicateHero = ({ duplicate, setDuplicate }) => {
  if (duplicate) {
    return (
      <div className="error-screen">
        <img
          className="spiderman"
          src="images/spiderman-pointing.jpg"
          alt="Spider-Man Pointing"
        ></img>
        <div>
          <h2>Sorry! You can't select the same hero more than once.</h2>
          <button
            className="ui red massive button"
            onClick={() => setDuplicate(false)}
          >
            Back to my team
          </button>
        </div>
      </div>
    );
  } else return null;
};

export default DuplicateHero;
