import React from "react";
import "./HeroGrid.css";

const HeroGrid = ({ characterName, setCharacter }) => {
  const apiCall = !characterName ? null : characterName.data.results[0];

  return !characterName ? null : (
    <div className="ui link cards">
      <div className="ui card">
        <div className="image">
          <img
            alt="heroimg"
            src={`${apiCall.thumbnail.path}.${apiCall.thumbnail.extension}`}
          />
        </div>
        <div className="content">
          <a className="ui header massive">{apiCall.name}</a>
          <div className="meta">
            <span className="date">
              Has appeared in {apiCall.comics.available} comic books{" "}
            </span>
          </div>
          <div className="description">
            {apiCall.description ? apiCall.description : "No bio available."}
          </div>
          <button className="ui button red" onClick={() => setCharacter(null)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroGrid;
