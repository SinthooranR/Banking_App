import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavItem.module.css";

const navItem = (props) => (
  <li className={classes.NavItem}>
    <NavLink
      activeStyle={{
        color: "#fefefe",
        border: "2px solid white"
      }}
      to={props.routeLink}
      exact={props.exact}
    >
      {props.routeName}
    </NavLink>
  </li>
);

export default navItem;
