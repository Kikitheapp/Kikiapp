import React from 'react'
import { Route } from 'react-router-dom'
import Homepage from './components/homepage'
import Navbar from './components/nav'
import AboutUs from './components/AboutUs.jsx'
import PrEP from './components/PrEP.jsx'
import ThemeSwitcher from './components/ThemeSwitcher.jsx'
import Mailinglist from './components/Mailinglist'

function App() {
  return (
    <div className='App container-fluid'>
      <Navbar> </Navbar>
      <ThemeSwitcher></ThemeSwitcher>
      <Route exact path='/'>
        <Homepage></Homepage>
      </Route>
      <Route path='/aboutUs'>
        <AboutUs></AboutUs>
      </Route>
      <Route path='/PrEP'>
        <PrEP></PrEP>
      </Route>
      <Route path='/MailinglistForm'>
        <Mailinglist></Mailinglist>
      </Route>
    </div>
  )
}
export default App;
