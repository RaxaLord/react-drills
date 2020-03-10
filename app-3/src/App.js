import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filteredList: "",
      list: ["hello", "goodbye", "farewell", "so long"]
    };
  }

  handleChange(filter) {
    this.setState({ filteredList: filter });
  }

  render() {
    let displayedList = this.state.list
      .filter((e, i) => {
        return e.includes(this.state.filteredList);
      })
      .map(e => {
        return <h3>{e}</h3>;
      });

    return (
      <div className="App">
        <input type="text" onChange={e => this.handleChange(e.target.value)} />
        {displayedList}
      </div>
    );
  }
}

export default App;
