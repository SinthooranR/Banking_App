import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import classes from "./Authentication.module.css";
// import Button from "../../components/Shared/UI/Button";
import Button from "@material-ui/core/Button";
import {Authenticate} from "../../authContext"

const EditUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errUsername, setErrUsername] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const auth = useContext(Authenticate);
  const history = useHistory();

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
    axios
      .patch(`http://localhost:5000/api/users/${auth.user_id}`, {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        alert(response.data.user.id);
        auth.login(response.data.user.id);
        history.push("/"); //redirects the user back to main page
      })
      .catch((error) => {
        // history.push("/authentication"); //ERROR REDIRECT TEST
        console.log(error);
      });
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <h2 className={classes.HeaderMessage}></h2>
      <div className={classes.AuthForm}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>New Username </label>
            <input
              type="text"
              placeholder="Enter New Username"
              value={username}
              onChange={handleUsernameChange}
            />

            {errUsername && <p>Username must be between 6 and 10 characters</p>}
          </div>
          <div>
            <label>New Password </label>
            <input
              type="password"
              placeholder="Enter New Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {errPassword && <p>Password must be between 6 and 10 characters</p>}
          </div>
          <div className={classes.authButton}>
            <Button
              type="submit"
              variant="contained"
              onClick={() => handleSubmit}
            >
                Submit
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default EditUser;
