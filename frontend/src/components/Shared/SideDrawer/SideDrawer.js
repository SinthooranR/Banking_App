import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import NavItem from "../Navbar/NavItem";

import { Authenticate } from "../../../authContext";
import Button from "@material-ui/core/Button";
import Backdrop from "../Backdrop/Backdrop";

import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  const auth = useContext(Authenticate);
  const history = useHistory();

  const logoutHandler = (event) => {
    auth.logout();
    history.push("/");
    event.preventDefault();
  };

  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.showDrawer) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <React.Fragment>
      <Backdrop show={props.showDrawer} closeBackDrop={props.closed}/>
      <nav className={attachedClasses.join(" ")}>
        <ul>
          {!auth.loggedIn && (
            <React.Fragment>
              <NavItem exact routeLink="/" routeName="Home" />
              <NavItem routeLink="/authentication" routeName="Login|SignUp" />
            </React.Fragment>
          )}
          {auth.loggedIn && (
            <React.Fragment>
              <NavItem exact routeLink="/" routeName="Overview" />
              <NavItem routeLink="/cards" routeName="CardStuff" />
              <Button
                color="secondary"
                onClick={logoutHandler}
                variant="contained"
              >
                LOGOUT
              </Button>
            </React.Fragment>
          )}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default SideDrawer;
