import React, { Component } from "react";
import Typical from "react-typical";
import classes from "./Authentication.module.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
      signupMode: false,
      disableButton: false
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    if (!this.state.signupMode) {
      alert(`${this.state.username}, ${this.state.password}`);
    } else {
      alert(
        `${this.state.name}, ${this.state.username}, ${this.state.password}`
      );
    }
    event.preventDefault();
  };

  modeSwitchHandler = (event) => {
    this.setState({
      signupMode: !this.state.signupMode,
    });
    event.preventDefault();
  };

  render() {
    return (
      <div className={classes.AuthForm}>
        <form onSubmit={this.handleSubmit}>
          <div>
            {this.state.signupMode && (
              <div>
                <label>Name: </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </div>
            )}
            <label>Username: </label>
            <input
              type="text"
              placeholder="Enter Username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <div>
            <button type="submit">
              {this.state.signupMode ? "SIGNUP" : "LOGIN"}
            </button>
          </div>
          <div>
            <button onClick={this.modeSwitchHandler}>
              Switch to {!this.state.signupMode ? "SIGNUP" : "LOGIN"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
