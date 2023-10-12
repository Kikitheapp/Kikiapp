import * as React from 'react';
import { Link } from 'gatsby';

import '../layout.css';

import Escape from '../../components/escape/escape';
import Navbar from '../../components/navbar/navbar';
import PageHeading from '../../components/pageheading/page-heading.js';


import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaPatreon } from 'react-icons/fa';

import person1 from "../../assets/images/resources/resources-header-person-1.png";
import person2 from "../../assets/images/resources/resources-header-person-2.png";

/**
 * Resource layout component - layout for the resources pages
 * @param ReactElement children - the children of the component
 * @return ReactElement - the layout component
 **/
function RLayout({ children }){

  const pageInfo = {
    title: "LGBTQIA+ Resources",
    bgColor: "light-orange",
    person1: person1,
    person2: person2
  }  

  const pageMetadata = {
    title: "LGBTQIA+ Resources"
  }

  return (
    <div className="root">

      <div className="bg-secondary menu">
          <Escape></Escape>
          <Navbar></Navbar>
      </div>
      <main className="container-fluid">
        <PageHeading info={pageInfo} metadata={pageMetadata}></PageHeading>
        {children}
      </main>
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
    </div>
  )
}

export default RLayout;
