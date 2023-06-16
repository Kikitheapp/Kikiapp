import * as React from 'react';
import { Link, navigate } from 'gatsby';

import '../layout.css';

import Escape from '../../components/escape/escape';
import Navbar from '../../components/navbar/navbar';
import ThemeSwitcher from '../../components/themeswitcher/theme-switcher';
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

  // TODO: Handle State selection
  function loadResources(event) {
    navigate(`/resources/${event.target.value}`);
  }

  return (
    <div>
    <div className="root">
      <div className="container-fluid">
        <Escape></Escape>
        <Navbar></Navbar>
        <ThemeSwitcher></ThemeSwitcher>
        <PageHeading info={pageInfo} metadata={pageMetadata}></PageHeading>
        <main>
        <div className="py-4 my-5 bg-primary text-center">
            <label className="form-label" htmlFor="select-type">Resources by Type: </label>
            <select id="select-type" className="text-center btn btn-outline-secondary ps-1" onChange={loadResources}>
              <option value="">All</option>
              <option value="housing">Housing</option>s
              <option value="legal">Legal</option>
              <option value="health-wellness">Health + Wellness</option>
              <option value="queer-spaces">Queer Spaces</option>
            </select>
          </div>
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
    </div>
  )
}

export default RLayout;