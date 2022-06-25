import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/home" component={HomePage}></Route>
          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
