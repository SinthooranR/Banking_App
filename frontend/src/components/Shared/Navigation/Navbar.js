import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../../logo.svg";
import NavItem from "./NavItem";

import { Authenticate } from "../../../authContext";
import Button from '@material-ui/core/Button';

import classes from "./Navbar.module.css";

// CAPITALIZE ALL COMPONENTS
const Navbar = () => {
  const auth = useContext(Authenticate);
  const history = useHistory();

  const logoutHandler = (event) => {
    auth.logout();
    history.push("/");
    event.preventDefault();
  };

  return (
    <header className={classes.Navbar}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul className="Navbar">
          {!auth.loggedIn && (
            <React.Fragment>
              <NavItem routeLink="/" routeName="Home" />
              <NavItem routeLink="/authentication" routeName="Login|SignUp" />
            </React.Fragment>
          )}
          {auth.loggedIn && (
            <React.Fragment>
              <NavItem routeLink="/cards" routeName="CardStuff" />
              <Button color="secondary" onClick={logoutHandler} variant="contained">
                LOGOUT
              </Button>
            </React.Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
