import React from 'react';
import './App.css';

// UI Components
import Navbar from './components/Shared/Navigation/Navbar';

// Page Components
import WelcomePage from './pages/Welcome/Welcome';
import LoginPage from './pages/Users/Login';
import SignUpPage from './pages/Users/Signup';
import CardsPage from './pages/CreditCards/CardManage';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

function App() {
  return (
   <Router>
     <Navbar />
     <Switch>
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/signup" component={SignUpPage}/>
      <Route path="/cards" component={CardsPage}/>
     </Switch>
   </Router>
  );
}

export default App;
