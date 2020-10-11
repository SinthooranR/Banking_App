import React, {useState} from "react";
import "./App.css";

// UI Components
import Navbar from "./components/Shared/Navigation/Navbar";

// Page Components
import WelcomePage from "./pages/Welcome/Welcome";
import Authentication from "./pages/Users/Authentication";
import CardsPage from "./pages/CreditCards/CardManage";

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

  let route;

  if (loggedIn) {
    route = (
      <Switch>
        <Route path="/cards" component={CardsPage} />
      </Switch>
    );
  } else {
    route = (
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/authentication" component={Authentication} />
    </Switch>
    )
  }

  return (
    <Authenticate.Provider
      value={{
        loggedIn: loggedIn,
        login: login,
        logout: logout
      }}
    >
    <Router>
      <Navbar />
      <main>{route}</main>
    </Router>
   </Authenticate.Provider>
  );
}

export default App;
