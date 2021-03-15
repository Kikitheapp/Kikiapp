import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Mailinglist from './components/mailinglist'
import Graphic from './components/graphic'
import Navbar from './components/nav'
import Logo from './components/logo'
import AboutUs from './components/AboutUs.jsx'
function App() {
  return (
    <div className='App'>
      <header className='App-body'>
        {/* Any jsx tag with no children should be a self-closing tag. See: https://reactjs.org/docs/jsx-in-depth.html */}
        <Logo></Logo>
        <Navbar> </Navbar>
        <Route exact path='/'>
          <Graphic></Graphic>
          <Mailinglist></Mailinglist>
        </Route>
        <Route path='/aboutUs'>
          <AboutUs></AboutUs>
        </Route>
        <Route path='/MailinglistForm' render={()=>{
          window.location.href='form.html'
        }}>
        </Route> 
      </header>
    </div>
  )
}

export default App
