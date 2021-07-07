import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppFun from './AppFun';
import AppClass from './AppClass';
import { About } from './About';
import Users from './Users'
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <Router>
      <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <AppFun />
      </Route>
  </Switch>
    </Router>

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
