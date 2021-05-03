import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Graphic from './components/graphic'
import Navbar from './components/nav'
import AboutUs from './components/AboutUs'
import PrEP from './components/PrEP'
import SexToys from './components/SexToys'
import ThemeSwitcher from './components/ThemeSwitcher.jsx'

function App() {
  return (
    <div className='App container-fluid'>
      <Navbar> </Navbar>
      <Route exact path='/'>
        <Graphic></Graphic>
        <ThemeSwitcher></ThemeSwitcher>
      </Route>
      <Route path='/aboutUs'>
        <ThemeSwitcher></ThemeSwitcher>
        <AboutUs></AboutUs>
      </Route>
      <Route path='/PrEP-info'>
        <ThemeSwitcher></ThemeSwitcher>
        <PrEP></PrEP>
      </Route>
      <Route path='/sex-toys'>
        <ThemeSwitcher></ThemeSwitcher>
        <SexToys></SexToys>
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

export default App
