import "./HeroGrid.css";
import React from "react";

const HeroGrid = ({ characterName }) => {
  const apiCall = characterName.data.results[0];

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
            {apiCall.description ? apiCall.description : ""}
          </div>
          <button className="ui button red">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default HeroGrid;
