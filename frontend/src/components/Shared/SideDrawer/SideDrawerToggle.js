import React from "react";
import SideDrawer from "./SideDrawer";
import "./SideDrawerToggle.css";
import logo from "../../../logo.svg";

const sideDrawerToggle = (props) => (
  <button className="toggleButton" onClick={props.click}>
    <img src={logo} alt="logo" />
  </button>
);

export default sideDrawerToggle;
