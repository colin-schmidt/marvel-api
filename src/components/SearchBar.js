import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
    <div className="ui segment">
      <div className="ui field raised segment">
        <div className="ui massive input">
          <form onSubmit={onFormSubmit}>
            {/* onInputChange passed as prop to searchbar */}
            <input
              type="text"
              value={input}
              placeholder="search here..."
              onChange={(e) => setInput(e.target.value)}
              onSubmit={onFormSubmit}
            />
          </form>
        </div>
        <button className="ui red button">Add a hero</button>
      </div>
    </div>
  );
};

export default SearchBar;
