import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Graphic from './components/graphic';
import Navbar from './components/nav';
import AboutUs from './components/AboutUs.jsx';
import Faq from './components/Faq.jsx'
function App() {
  return (
    <div className='App container-fluid'>
      <Navbar> </Navbar>
      <Route exact path='/'>
        <Graphic></Graphic>
      </Route>
      <Route path='/aboutUs'>
        <AboutUs></AboutUs>
      </Route>
      <Route path='/Faq'>
          <Faq></Faq>
        </Route>
      <Route path='/MailinglistForm' render={() => {
        window.location.href = 'form.html'
      }}>
      </Route>
    </div>
  )
}
export default App;
