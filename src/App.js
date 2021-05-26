import logo from './logo.svg';
import './App.css';
import React from 'react';
import Mountains from './assests/mountainsandtree.svg';

function App() {

  var name = 'Utkarsh'
  var loggedIn = false
  return (
    <React.Fragment>
      
    <div className="App">
      <header className="App-header">
      <h1>Welcome To React Page</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={Mountains} className="App-logo" alt="logo" />
        <p>
         Hello {loggedIn ? name : 'World'} 
        </p>
      </header>
    </div>
    </React.Fragment>
  );
}

export default App;
