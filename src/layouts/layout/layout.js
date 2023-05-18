import * as React from 'react';
import { Link } from 'gatsby';
import Navbar from '../../components/navbar/navbar';
import ThemeSwitcher from '../../components/themeswitcher/theme-switcher';
import './layout.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaPatreon } from 'react-icons/fa';

const Layout = ({ children }) => {
  return (
    <>
    <div className="root">
      <div className="container-fluid">
        <Navbar></Navbar>
        <ThemeSwitcher></ThemeSwitcher>
        <main>
          {children}
        </main>
      </div>
    </div>
      <footer className="container-fluid bg-primary">
        <h3>Kiki for the Future™</h3>
        <h3>Follow us</h3>
        <div>
          <a className="social-icons" href="https://www.facebook.com/kikitheapp/" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare></FaFacebookSquare>
            </a>
          <a className="social-icons" href="https://www.instagram.com/kikitheapp/" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare></FaInstagramSquare>
          </a>
          <a className="social-icons" href="https://twitter.com/kikitheapp" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare></FaTwitterSquare>
          </a>
          <a className="social-icons" href="https://www.patreon.com/kikitheapp" target="_blank" rel="noopener noreferrer">
            <FaPatreon></FaPatreon>
          </a>
        </div>
        <div className="pt-2">
          <Link className="text-white text-decoration-none" to='/privacypolicy'>Privacy Policy</Link>
          &nbsp;-&nbsp; 
          <Link className="text-white text-decoration-none" to='/termsofuse'>Terms of Use</Link>
        </div>
      </footer>
    </>
  )
}

export default Layout;