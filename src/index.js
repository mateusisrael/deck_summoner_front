import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login'
import reportWebVitals from './reportWebVitals';
import Private from './private';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'




ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/" component={(props) => (
        <Private {...props}>
          {() => (
            <Home {...props}/>
          )}
        </Private>
      )} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
