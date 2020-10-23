import React from "react";
import classes from "./SideDrawerToggle.module.css";

const sideDrawerToggle = (props) => (
  <button className={classes.ToggleButton} onClick={props.click}>
    <div></div>
    <div></div>
    <div></div>
  </button>
);

export default sideDrawerToggle;
