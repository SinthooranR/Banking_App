import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavItem.module.css";

const navItem = (props) => (
  <li className={classes.NavItem}>
    <NavLink
      activeStyle={{
        color: "#FFD700",
      }}
      to={props.routeLink}
    >
      {props.routeName}
    </NavLink>
  </li>
);

export default navItem;
