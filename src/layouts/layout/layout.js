import * as React from 'react';
import Navbar from '../../components/navbar/navbar';
import ThemeSwitcher from '../../components/themeswitcher/theme-switcher';
import './layout.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

const Layout = ({ pageTitle, children }) => {
  return (
    <>
    <div className="root">
      <title>{pageTitle}</title>
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
        </div>
      </footer>
    </>
  )
}

export default Layout;