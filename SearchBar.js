import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  //can write a callback function to pass in as a prop below, but we wrote an arrow fn below instead
  // onInputChange = (event) => {
  //   this.setState({ input: event.target.value });
  // };

  //can also write an arrow function in the prop rather than defining a separate method:
  // <input onChange={(event) => this.setState( input: event.target.value})} />

  const onFormSubmit = (e) => {
    e.preventDefault();

    onSubmit(input);

    //trying to get the search bar to empty after hitting enter - this currently makes sb disappear lul
    // e.target.textContent = "";
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
            />
          </form>
        </div>
        <button className="ui red button">Add a hero</button>
      </div>
    </div>
  );
};

export default SearchBar;

