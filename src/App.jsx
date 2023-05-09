import React from 'react';
import "./Header.css";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';


function Header() {
  return (
    <div className="app">
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Header;