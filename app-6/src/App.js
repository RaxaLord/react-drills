import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: ""
    };

    this.addTasks = this.addTasks.bind(this);
  }

  handleInput(val) {
    this.setState({ input: val });
  }

  addTasks() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }

  render() {
    let list = this.state.list.map((e, i) => {
      return <Todo key={i} task={e} />;
    });

    return (
      <div className="App">
        <h1>Things To Do:</h1>

        <div>
          <input
            value={this.state.input}
            placeholder="Add Item To List?"
            onChange={e => this.handleInput(e.target.value)}
          />
          <button onClick={this.addTasks}>Add</button>
        </div>

        <br />

        {list}
      </div>
    );
  }
}
export default App;
