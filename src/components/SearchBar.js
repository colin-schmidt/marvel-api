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
    <div className="ui raised segment">
      <img
        className="header-logo"
        alt="marvel logo"
        src="images/small-marvel-logo.png"
      ></img>
      <div className="ui huge input">
        <form onSubmit={onFormSubmit}>
          <input
            className="search-bar"
            type="text"
            value={input}
            placeholder="search here..."
            onChange={(e) => setInput(e.target.value)}
            onSubmit={onFormSubmit}
          />
        </form>
      </div>
      <button className="ui red button" onClick={onFormSubmit}>
        Add
      </button>
    </div>
  );
};

export default SearchBar;
