import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import classes from "./Authentication.module.css";
import Button from "../../components/Shared/UI/Button";
import { Authenticate } from "../../authContext";


const Login = (props) => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [signupMode, setSignupMode] = useState(false);

  const auth = useContext(Authenticate);
  const history = useHistory();

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "",
  //     username: "",
  //     password: "",
  //     signupMode: false,
  //     disableButton: false
  //   };
  // }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    if (!signupMode) {
      alert(`${username}, ${password}`);
      // this will pass the boolean data as true when the user has logged in
      auth.login();
      history.push('/') //redirects the user back to main page
    } else {
      alert(`${name}, ${username}, ${password}`);
      // this will pass the boolean data as true when the user has logged in
      auth.login();
      history.push('/') //redirects the user back to main page
    }
    event.preventDefault();
  };

  const modeSwitchHandler = (event) => {
    setSignupMode((prevMode) => !prevMode);
    event.preventDefault();
  };

  return (
    <div className={classes.AuthForm}>
      <form onSubmit={handleSubmit}>
        <div>
          {signupMode && (
            <div>
              <label>Name: </label>
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={handleNameChange}
              />
              {
                !name && <p className={classes.characterErrorMsg}>Please enter your name</p>
              }
            </div>
          )}
          <label>Username: </label>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={handleUsernameChange}
          />
            {
            (!username || (username.length < 6 || username.length > 10)) && <p className={classes.characterErrorMsg}>Username must be between 6 and 10 characters</p>
            }
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {
            (!password || (password.length < 6 || password.length > 10)) && <p className={classes.characterErrorMsg}>Password must be between 6 and 10 characters</p>
          }
        </div>
        <div>
          <Button type="submit">{signupMode ? "SIGNUP" : "LOGIN"}</Button>
        </div>
        <div>
          <Button onClick={modeSwitchHandler}>
            Switch to {!signupMode ? "SIGNUP" : "LOGIN"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
