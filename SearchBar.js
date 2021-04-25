import React from "react";

class SearchBar extends React.Component {
  state = {
    input: "",
  };

  //can write a callback function to pass in as a prop below, but we wrote an arrow fn below instead
  // onInputChange = (event) => {
  //   this.setState({ input: event.target.value });
  // };

  //can also write an arrow function in the prop rather than defining a separate method:
  // <input onChange={(event) => this.setState( input: event.target.value})} />

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.input);

    //trying to get the search bar to empty after hitting enter - this currently makes sb disappear lul
    // e.target.textContent = "";
  };

  render() {
    return (
      <div className="ui segment">
        <div className="ui field raised segment">
          <div className="ui massive input">
            <form onSubmit={this.onFormSubmit}>
              {/* onInputChange passed as prop to searchbar */}
              <input
                type="text"
                value={this.state.input}
                placeholder="search here..."
                onChange={(e) => this.setState({ input: e.target.value })}
              />
            </form>
          </div>
          <button className="ui red button">Add a hero</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
