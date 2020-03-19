import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Login from './components/login/Login.js';

function App() {
  return (
    <div className="App">
      <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <Login />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Every man wants this! Check this out for free...
        </a>
      <Footer />
    </div>
  );
}

export default App;
