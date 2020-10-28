import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import Button from "../../components/Shared/UI/Button";
import Button from "@material-ui/core/Button";
import { Authenticate } from "../../authContext";
import classes from "./EditUser.module.css";

const EditUser = () => {
  const [grabUsername, setGrabUsername] = useState("");
  const [grabPassword, setGrabPassword] = useState("");
  const [grabSavingsGoal, setGrabSavingsGoal] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [savingsGoal, setSavings] = useState("");
  const [errUsername, setErrUsername] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const auth = useContext(Authenticate);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const httpResult = await axios.get(
        `http://localhost:5000/api/users/${auth.user_id}`
      );
      setGrabUsername(httpResult.data.user.username);
      setGrabPassword(httpResult.data.user.password);
      setGrabSavingsGoal(httpResult.data.user.savingsGoal);
    };

    fetchData();
  }, [auth.user_id]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    if (event.target.value.length < 6 || event.target.value.length > 10) {
      setErrUsername(true);
    } else {
      setErrUsername(false);
    }
  };

  const handleSavingsChange = (event) => {
    setSavings(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 6 || event.target.value.length > 10) {
      setErrPassword(true);
    } else {
      setErrPassword(false);
    }
  };
  const handleSubmitUsername = async (event) => {
    axios
      .patch(`http://localhost:5000/api/users/${auth.user_id}`, {
        username: username,
      })
      .then((response) => {
        console.log(response);
        alert(response.data.user.username);
        auth.login(response.data.user.id);
        history.push("/"); //redirects the user back to main page
      })
      .catch((error) => {
        // history.push("/authentication"); //ERROR REDIRECT TEST
        console.log(error);
      });
    event.preventDefault();
  };
  const handleSubmitPassword = async (event) => {
    axios
      .patch(`http://localhost:5000/api/users/${auth.user_id}/password`, {
        password: password,
      })
      .then((response) => {
        console.log(response);
        alert(response.data.user.password);
        auth.login(response.data.user.id);
        history.push("/"); //redirects the user back to main page
      })
      .catch((error) => {
        // history.push("/authentication"); //ERROR REDIRECT TEST
        console.log(error);
      });
    event.preventDefault();
  };

  const handleSubmitSavings = async (event) => {
    axios
      .patch(`http://localhost:5000/api/users/${auth.user_id}/savingsGoal`, {
        savingsGoal: savingsGoal,
      })
      .then((response) => {
        console.log(response);
        alert(response.data.user.savingsGoal);
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
      <h2 className={classes.HeaderMessage}>Edit User</h2>
      <div className={classes.AuthForm}>
        <form onSubmit={handleSubmitUsername}>
          <label>Current Username: {grabUsername} </label>
          <span>
            <input
              type="text"
              placeholder="Enter New Username"
              value={username}
              onChange={handleUsernameChange}
            />
            <Button
              type="submit"
              variant="contained"
              onClick={() => handleSubmitUsername}
            >
              Submit
            </Button>
          </span>
          {errUsername && <p>Username must be between 6 and 10 characters</p>}
        </form>
        <form onSubmit={handleSubmitPassword}>
          <label>Current Password: {grabPassword} </label>
          <span>
            <input
              type="password"
              placeholder="Enter New Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Button
              type="submit"
              variant="contained"
              onClick={() => handleSubmitPassword}
            >
              Submit
            </Button>
          </span>
          {errPassword && <p>Password must be between 6 and 10 characters</p>}
        </form>
        <form onSubmit={handleSubmitSavings}>
          <label>Current Monthly Goal: ${grabSavingsGoal} </label>
          <span>
            <input
              type="number"
              value={savingsGoal}
              placeholder="Enter New Goal"
              onChange={handleSavingsChange}
            />
            <Button
              type="submit"
              variant="contained"
              onClick={() => handleSubmitSavings}
            >
              Submit
            </Button>
          </span>
        </form>
      </div>
    </React.Fragment>
  );
};

export default EditUser;
