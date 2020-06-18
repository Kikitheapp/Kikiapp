import React from 'react';
import './App.css';
import Logo from './components/logo'
import Mailinglist from './components/mailinglist'
import Graphic from './components/graphic'
// import Footer from './components/footer'

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
      {/* <Footer /> */}
    </div>
  );
}

export default App;
