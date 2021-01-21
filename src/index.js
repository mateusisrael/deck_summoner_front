import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login'
import reportWebVitals from './reportWebVitals';
import Private from './private';
import {config} from 'dotenv';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
config();



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={props => <Login {...props}/>}/>
      <Route exact path="/" component={(props) => (
        <Private {...props}>
          {() => (
            <Home/>
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
