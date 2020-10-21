import React, { useContext } from "react";
import NavItem from "../Navbar/NavItem";

import { Authenticate } from "../../../authContext";

import Backdrop from "../Backdrop/Backdrop";

import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  const auth = useContext(Authenticate);

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
              <NavItem routeLink="/cards" routeName="My Card" />
              <NavItem routeLink="/addCards" routeName="Add Card" />
              <NavItem routeLink="/logout" routeName="Logout" />
              
            </React.Fragment>
          )}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default SideDrawer;
