import React from 'react';
import logo from './logo.svg';
import MemoCallback from './MemoCallback';

function RouteOne(props) {
    return (
        <div className="App">
          <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <p><code>{props.routeName}</code></p>
           <MemoCallback />
          </header>
        </div>
    );
}

export default RouteOne;