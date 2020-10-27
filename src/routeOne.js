import React from 'react';
import logo from './logo.svg';

function RouteOne(props) {
    return (
        <div className="App">
          <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <p><code>{props.routeName}</code></p>
          </header>
        </div>
    );
}

export default RouteOne;