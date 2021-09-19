import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSubmit, setNoResults }) => {
  const [input, setInput] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    input.length ? onSubmit(input) : setNoResults(true);
    setInput("");
  };

  return (
    <div className="ui segment">
      <div className="ui field raised segment">
        <div className="ui huge input">
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              value={input}
              placeholder="search here..."
              onChange={(e) => setInput(e.target.value)}
              onSubmit={onFormSubmit}
            />
          </form>
        </div>
        <button className="ui red small button" onClick={onFormSubmit}>
          Add a hero
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
