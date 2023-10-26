import * as React from 'react';
import '../layout.css';

import Escape from '../../components/escape/escape';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';


/**
 * Layout component - main layout for the site
 * @param ReactElement children - the children of the component
 * @return ReactElement - the layout component
 **/
function Layout({ children }){
  return (
    <div className="root">
      <div className="bg-secondary menu">
        <Escape></Escape>
        <Navbar></Navbar>
      </div>
      <main className="container-fluid">
        {children}
      </main>

      <Footer></Footer>
    </div>
  )
}

export default Layout;
