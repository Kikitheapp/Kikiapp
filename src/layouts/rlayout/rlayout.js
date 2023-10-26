import * as React from 'react';

import '../layout.css';

import Escape from '../../components/escape/escape';
import Navbar from '../../components/navbar/navbar';
import PageHeading from '../../components/pageheading/page-heading.js';
import Footer from '../../components/footer/footer';

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
    person1: {"img": person1, "alt": "Two masc-appearing people holding hands and dancing."},
    person2: {"img": person2, "alt": "Two femme-appearing people holding hands and dancing, one in a dress and one in flares and a long-sleeved crop top."}
  }  

  const pageMetadata = {
    title: "LGBTQIA+ Resources",
    description: "Find IRL LGBTQIA+ resources in NYC and beyond."
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
      <Footer></Footer>
    </div>
  )
}

export default RLayout;
