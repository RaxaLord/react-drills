import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cars: ["honda", "toyota", "tesla", "acura", "volkswagen"]
    };
  }

  render() {
    let listOfCars = this.state.cars.map(e => {
      return <h3>{e}</h3>;
    });

    return <div className="App">{listOfCars}</div>;
  }
}

export default App;
