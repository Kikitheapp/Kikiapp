import * as React from "react";
import Layout from '../layouts/layout/layout.js';
import AppBanner from '../components/appbanner/app-banner';
import ArticleFeed from '../components/article-feed/article-feed';

import HomePerson1 from "../assets/images/index/home-person-1.svg";
import HomePerson2 from "../assets/images/index/home-person-2.svg";
import BackgroundVector from "../assets/images/background-vector.svg";
import { Link } from 'gatsby';
import './index.css';
import Seo from "../components/seo/seo.js";

function Index(){
  return (
    <div className="homepage">
      <AppBanner></AppBanner>
      <Layout>
          <div className="row align-items-center p-2 welcome" style={{backgroundImage: `url(${BackgroundVector})` }}>
            <div className="col-sm-6 text-center text-md-left px-md-5"> 
              <h2 className="text-md-start pt-4 ">Get a fresh take on what you didn&apos;t learn in sex-ed.</h2>
              <Link className='btn btn-primary mailinglistbtn my-3' to='/mailinglist' data-testid='mailing-list-link'>
                  Join our mailing list
              </Link>
              <h3 className="text-md-start pb-1">Sign up to get our free queer pleasure workbook!</h3>
            </div>
            <div className="col-sm-6 home-people">
              <div className="row">
                <div className="col-6 home-person-1 text-end">
                  <img className="img-fluid" src={HomePerson1} alt="Person standing with lab coat and a bun." />
                </div>
                <div className="col-6 home-person-2">
                  <img className ="img-fluid" src={HomePerson2} alt="Person with blue pants and jacket sitting on a cube." />
                </div>
              </div>
            </div>
          </div>
      <ArticleFeed />
      </Layout>
    </div>
  )
}

export default Index;


export function Head(){
  return <Seo />
}
