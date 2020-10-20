import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

import classes from "./Authentication.module.css";
// import Button from "../../components/Shared/UI/Button";

import Button from "@material-ui/core/Button";
import { Authenticate } from "../../authContext";

const Login = (props) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupMode, setSignupMode] = useState(false);
  const [errUsername, setErrUsername] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [errName, setErrName] = useState(false);

  const auth = useContext(Authenticate);
  const history = useHistory();

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (!event.target.value) {
      setErrName(true);
    } else {
      setErrName(false);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    if (event.target.value.length < 6 || event.target.value.length > 10) {
      setErrUsername(true);
    } else {
      setErrUsername(false);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 6 || event.target.value.length > 10) {
      setErrPassword(true);
    } else {
      setErrPassword(false);
    }
  };

  const handleSubmit = async (event) => {
    if (!signupMode) {
      // alert(`${username}, ${password}`);
      // api call
      axios.post('http://localhost:5000/api/users/login', {
        username: username,
        password: password
      })
      .then((response) => {
        console.log(response);
        alert(response.data.user.id);
        auth.login(response.data.user.id);
       
      })
      .catch((error) => {
        // history.push("/authentication"); //ERROR REDIRECT TEST
        console.log(error);
      });

      history.push("/"); //redirects the user back to main page
    } else {
      alert(`${name}, ${username}, ${password}`);
      axios.post('http://localhost:5000/api/users/signup', {
        name: name,
        username: username,
        password: password
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  
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
    <React.Fragment>
      <h2 className={classes.HeaderMessage}>{!signupMode ? "Sign up for your online Banking Account today!" : "Have an account? Login below!"} </h2> 
      <div className={classes.AuthForm}>
        <form onSubmit={handleSubmit}>
          {signupMode && (
            <div>
              <label>Name </label>
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={handleNameChange}
                
              />
              {errName && (
                <p>
                  Please enter your name
                </p>
              )}
            </div>
          )}
          <div>
            <label>Username </label>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={handleUsernameChange}
              
            />

            {errUsername && (
              <p>
                Username must be between 6 and 10 characters
              </p>
            )}
          </div>
          <div>
            <label>Password </label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
              
            />
            {errPassword && (
              <p>
                Password must be between 6 and 10 characters
              </p>
            )}
          </div>
          <div className={classes.authButton}>
            <Button type="submit" variant="contained" onClick={() => handleSubmit}>
              {signupMode ? "SIGNUP" : "LOGIN"}
            </Button>
          </div>
          <div className={classes.authButton}>
            <Button
              onClick={modeSwitchHandler}
              color="primary"
              variant="contained"
            >
              Switch to {!signupMode ? "SIGNUP" : "LOGIN"}
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
