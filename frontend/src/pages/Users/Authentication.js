import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import classes from "./Authentication.module.css";
// import Button from "../../components/Shared/UI/Button";

import Button from '@material-ui/core/Button';
import { Authenticate } from "../../authContext";

const Login = (props) => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [signupMode, setSignupMode] = useState(false);
  const [errUsername, setErrUsername] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [errName, setErrName] = useState(false);

  const auth = useContext(Authenticate);
  const history = useHistory();

  const handleNameChange = (event) => {
    setName(event.target.value);
    if(!event.target.value){
      setErrName(true);
    }
    else{
      setErrName(false);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    if(event.target.value.length < 6 || event.target.value.length > 10){
      setErrUsername(true);
    }
    else{
      setErrUsername(false);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if(event.target.value.length < 6 || event.target.value.length > 10){
      setErrPassword(true);
    }
    else{
      setErrPassword(false);
    }
  };

  const handleSubmit = (event) => {
    if (!signupMode) {
      alert(`${username}, ${password}`);
      // this will pass the boolean data as true when the user has logged in
      auth.login();
      history.push("/"); //redirects the user back to main page
    } else {
      alert(`${name}, ${username}, ${password}`);
      // this will pass the boolean data as true when the user has logged in
      auth.login();
      history.push("/"); //redirects the user back to main page
    }
    event.preventDefault();
  };

  const modeSwitchHandler = (event) => {
    setSignupMode((prevMode) => !prevMode);
    setName("");
    setUsername("");
    setPassword("");
    setErrUsername(false);
    setErrPassword(false);
    setErrName(false);
    event.preventDefault();
  };
  
  return (
    <div className={classes.AuthForm}>
      <form onSubmit={handleSubmit}>
        <div>
          {signupMode && (
            <div>
              <label className={classes.inputLabel}>Name: </label>
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={handleNameChange}
                className={classes.inputBox}
              />
              {errName && (
                <p className={classes.characterErrorMsg}>
                  Please enter your name
                </p>
              )}
            </div>
          )}
          <label className={classes.inputLabel}>Username: </label>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={handleUsernameChange}
            className={classes.inputBox}
          />

          {
            errUsername && <p className={classes.characterErrorMsg}>Username must be between 6 and 10 characters</p>
          }
        </div>
        <div>
          <label className={classes.inputLabel}>Password: </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
            className={classes.inputBox}
          />
          {errPassword && (
            <p className={classes.characterErrorMsg}>
              Password must be between 6 and 10 characters
            </p>
          )}
        </div>
        <div className={classes.authButton} >
          <Button type="submit" variant="contained">{signupMode ? "SIGNUP" : "LOGIN" }</Button>
        </div>
        <div className={classes.authButton}>
          <Button onClick={modeSwitchHandler} color="primary" variant="contained">
            Switch to {!signupMode ? "SIGNUP" : "LOGIN"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
