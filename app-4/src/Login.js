import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      user: "",
      pass: ""
    };

    this.login = this.login.bind(this);
  }

  usernameChange(user) {
    this.setState({ user: user });
  }

  passwordChange(pass) {
    this.setState({ pass: pass });
  }

  login() {
    alert(`Username: ${this.state.user} Password: ${this.state.pass}`);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.usernameChange(e.target.value)}
        />
        <input
          type="text"
          onChange={e => this.passwordChange(e.target.value)}
        />
        <button onClick={this.login}>Log Me In</button>
      </div>
    );
  }
}

export default Login;
