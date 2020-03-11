import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url="https://imagez.tmz.com/image/e7/4by3/2019/12/08/e7d6d436f2794f6cbe077473f7fbf21e_md.jpg" />
      </div>
    );
  }
}

export default App;
