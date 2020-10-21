import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Authenticate } from "../../authContext";
import Button from "@material-ui/core/Button";

const Logout = () => {
  const auth = useContext(Authenticate);
  const history = useHistory();

  const logoutHandler = (event) => {
    auth.logout();
    history.push("/");
    event.preventDefault();
  };
  const cancelHandler = (event) => {
    history.push("/");
    event.preventDefault();
  };
  return (
    <div>
      <h2> Are you sure you want to logout? </h2>
      <Button
        color="primary"
        onClick={cancelHandler}
        variant="contained"
        style={{ display: "inline" }}
      >
        CANCEL
      </Button>
      <Button
        color="secondary"
        onClick={logoutHandler}
        variant="contained"
        style={{ display: "inline" }}
      >
        YES
      </Button>
    </div>
  );
};

export default Logout;
