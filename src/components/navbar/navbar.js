import * as React from 'react';
import { Link } from 'gatsby';
import logo from '../../assets/images/kikilogo1.png';
import './navbar.css';

const Navbar = ()=> {
  return (
    <div className='nav-container'>
      <nav id="navbar" className='navbar navbar-expand-lg navbar-light'>
        <h1>
          <Link className='navbar-brand' to='/'>
            <img src={logo} alt='Kiki'></img>
          </Link>
        </h1>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item dropdown'>
              <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"> 
                Get Started 
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className='dropdown-item' to='/aboutus'>About Us</Link>
                <Link className='dropdown-item' to='/faq'>FAQ</Link>
                <Link className='dropdown-item' to='/prep'>PrEP Q&amp;A</Link>
                <Link className='dropdown-item' to='/meetthesextoys'> Meet the sex toys</Link>
              </div>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://kikiapp.medium.com/'>
                Visit our blog
              </a>
            </li>
            <li className='nav-item'>
            <a className='nav-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://kikitheapp.myshopify.com'>
                Shop
                </a>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/mailinglist
              '>
                Join our mailing list
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;