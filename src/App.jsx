import React from 'react';
import './App.css';
import Logo from './components/logo'
import Mailinglist from './components/mailinglist'
import Graphic from './components/graphic'


function App() {
  return (
    <div className="App">
      <header className="App-body">
      <Logo></Logo>
      <div className="content-container">
        <Graphic></Graphic>
        <Mailinglist></Mailinglist>
        </div>
      </header>
    </div>
  );
}

export default App;
