import React, { useContext } from "react";

import NavItem from "./NavItem";

import { Authenticate } from "../../../authContext";
import SideDrawerToggle from "../SideDrawer/SideDrawerToggle";

import classes from "./Navbar.module.css";

// CAPITALIZE ALL COMPONENTS
const Navbar = (props) => {
  const auth = useContext(Authenticate);
  return (
    <header className={classes.Navbar}>
      <div>
        <span>
          <SideDrawerToggle click={props.drawerClick} />
        </span>
      </div>
      <nav>
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
    </header>
  );
};

export default Navbar;
