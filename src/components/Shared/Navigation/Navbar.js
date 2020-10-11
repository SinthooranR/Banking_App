import React from "react";
import logo from '../../../logo.svg';
import NavItem from "./NavItem";

import classes from "./Navbar.module.css";

const navbar = (props) => (
  <header className={classes.Navbar}>
    <div><img src={logo} alt="logo" /></div>
    {/* <span>LOGO</span>  */}
    <nav>
      <ul className="Navbar">
        <NavItem routeLink="/" routeName="Home" />
        <NavItem routeLink="/authentication" routeName="Login|SignUp" />
        <NavItem routeLink="/cards" routeName="CardStuff" />
      </ul>
    </nav>
  </header>
);

export default navbar;
