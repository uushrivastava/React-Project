import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  var name = 'Utkarsh'
  var loggedIn = false
  return (
    <React.Fragment>
      
    <div className="App">
      <header className="App-header">
      <h1>Welcome to react page</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello {loggedIn ? name : 'World'} 
        </p>
      </header>
    </div>
    </React.Fragment>
  );
}

export default App;
