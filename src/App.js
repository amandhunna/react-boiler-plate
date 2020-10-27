import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import RouteOne from './routeOne'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => (<RouteOne  routeName='one' />)} /> 
        <Route exact path='/2' render={() => (<RouteOne  routeName='two' />)} /> 
        <Route exact path='/3' render={() => (<RouteOne  routeName='three' />)} /> 
        <Route exact path='/4' render={() => (<RouteOne  routeName='four' />)} /> 
      </Switch>    
    </BrowserRouter>
  );
}

export default App;
