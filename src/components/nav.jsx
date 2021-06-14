import React from 'react'
import { Link } from 'react-router-dom'
import ThemeSwitcher from './ThemeSwitcher.jsx'

export default function Navbar() {
  return (
    <div className='nav-container'>
      <ThemeSwitcher></ThemeSwitcher>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <h1>
          <Link className='navbar-brand' to='/'>
            <img src='../assets/images/kikilogo1.png' alt='Kiki'></img>
          </Link>
        </h1>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className=' navbar-nav ml-auto'>
            <li className='nav-item'>
              <a
                className='nav-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://medium.com/@kikiapp'>
                <p>Visit our blog</p>
              </a>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/prep-info'>
                <p>PrEP-info</p>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/Faq'>
                <p>FAQ</p>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/aboutUs'>
                <p>About us</p>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/MailinglistForm'>
                <p>Join Our Mailing List</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
