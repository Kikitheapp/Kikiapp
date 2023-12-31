import * as React from "react";
import { Link } from 'gatsby';

import './footer.css';

import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaPatreon } from 'react-icons/fa';
import { FaTiktok } from "react-icons/fa";


function Footer(){

  const year = new Date().getFullYear();

  return <footer className="container-fluid bg-primary">
    <h5>Kiki for the Future&reg;</h5>
    <h5>Follow us</h5>
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
      <a className="social-icons" href="https://www.tiktok.com/@kikitheapp" target="_blank" rel="noopener noreferrer">
        <FaTiktok></FaTiktok>
      </a>
    </div>
    <div className="pt-2">
      <Link className="text-charcoal text-decoration-none" to='/privacypolicy'>Privacy Policy</Link>
      &nbsp;-&nbsp; 
      <Link className="text-charcoal text-decoration-none" to='/termsofuse'>Terms of Use</Link>
    </div>
    <div className="pt-2">
      <small>&copy; 2021-{year} Kiki for the Future<sup>&reg;</sup></small>
    </div>
  </footer>
}

export default Footer;
