import React, { useState } from "react";
import "./App.css";

// UI Components
import Navbar from "./components/Shared/Navbar/Navbar";
import SideDrawer from "./components/Shared/SideDrawer/SideDrawer";


// Page Components
import WelcomePage from "./pages/Welcome/Welcome";
import Authentication from "./pages/Users/Authentication";
import CardsPage from "./pages/CreditCards/CardManage";
import OverviewPage from "./pages/Overview/Overview";
import AddCardPage from "./pages/CreditCards/AddCard"
import { Authenticate } from "./authContext";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const login = () => {
    setLoggedIn(true);
  };
  const logout = () => {
    setLoggedIn(false);
  };

  // UI states
  const [drawerToggled, setDrawerToggled] = useState(false);

  const toggleDrawerHandler = () => {
    setDrawerToggled(drawerToggled => !drawerToggled);
  };

  const closeDrawerHandler = () => {
    setDrawerToggled(false);
  };

  let route;

  if (loggedIn) {
    route = (
      <Switch>
        <Route exact path="/" component={OverviewPage} />
        <Route path="/cards" component={CardsPage} />
        <Route path="/addCards" component={AddCardPage} />
      </Switch>
    );
  } else {
    route = (
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/authentication" component={Authentication} />
      </Switch>
    );
  }

  return (
    <Authenticate.Provider
      value={{
        loggedIn: loggedIn,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        {/* only used for the sidedrawer mainly */}
        <div style={{ height: "100%" }}>
          <Navbar drawerClick={toggleDrawerHandler} />
          <SideDrawer showDrawer={drawerToggled} closed={closeDrawerHandler}/>
          <main>{route}</main>
        </div>
      </Router>
    </Authenticate.Provider>
  );
}

export default App;
