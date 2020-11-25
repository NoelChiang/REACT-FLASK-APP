import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [serverResp, setServerResp] = useState("")

  function getTimeHandle() {
    fetch('/api/time').then(res => res.json()).then(data => {
      setServerResp(data.time);
    });
  }

  function getProfileHandle() {
    fetch('/api/profile').then(res => res.json()).then(data => {
      setServerResp(data.name);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={getTimeHandle}>Get time</button>
        <button onClick={getProfileHandle}>Get profile</button>
        <p>Server response: {serverResp}</p>
      </header>
    </div>
  );
}

export default App;
