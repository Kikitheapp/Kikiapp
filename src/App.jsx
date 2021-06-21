import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Homepage from './components/homepage'
import Navbar from './components/nav'
import AboutUs from './components/AboutUs.jsx'
import PrEP from './components/PrEP.jsx'

function App() {
  return (
    <div className='App container-fluid'>
      <Navbar> </Navbar>
      <Route exact path='/'>
        <Homepage></Homepage>
      </Route>
      <Route path='/aboutUs'>
        <AboutUs></AboutUs>
      </Route>
      <Route  path='/MailinglistForm' render={() => {
        window.location.href = 'form.html'
      }}></Route>
      <Route path='/PrEP'>
        <PrEP></PrEP>
      </Route>
      <Route
        path='/MailinglistForm'
        render={() => {
          window.location.href = 'form.html'
        }}
      ></Route>
    </div>
  )
}
export default App;
