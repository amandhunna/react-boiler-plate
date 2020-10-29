import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import RouteOne from './routeOne'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={(route) => (<RouteOne  routeName={route.location.pathname} />)} /> 
        <Route exact path='/1' render={(route) => (<RouteOne  routeName={route.location.pathname} />)} /> 
        <Route exact path='/1/1' render={(route) => (<RouteOne  routeName={route.location.pathname} />)} /> 
      </Switch>    
    </BrowserRouter>
  );
}

export default App;
