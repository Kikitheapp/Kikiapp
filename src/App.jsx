import React from 'react';
import './App.css';
import Mailinglist from './components/mailinglist';
import Graphic from './components/graphic';
import Navbar from "./components/nav";
import Logo from './components/logo';


function App() {
  return (
    
    <div className="App">
      <header className="App-body">
        <Logo></Logo>
      <Navbar> </Navbar>

        <Graphic></Graphic>
        <Mailinglist></Mailinglist>
      </header>
    </div>
  );
}

export default App;
