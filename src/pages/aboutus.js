import * as React from "react";
import Layout from '../layouts/layout/layout.js';
import { Link } from 'gatsby';
import Seo from "../components/seo/seo.js";

import './aboutus.css';

const AboutUs = () => {

  return (
    <Layout>
      <div className="container">
      <div className="row justify-content-center">
        <div className="px-5 py-4 about-kiki">
          <p>
          We are Kiki For The Future™. We are creating an app that curates sexual health resources for the queer community. 
          We are a platform for queer sexual education, for sexual liberation, for knowledge, for power, joy, freedom, and connection. 
          Please check out our&ensp;
          <Link to='/posts' rel="noreferrer">blog</Link>, 
          sign up for our&ensp;
          <Link target='_blank' to='/mailinglist' rel="noreferrer">newsletter</Link>, and follow us on&ensp;
          <a target='_blank' href='https://www.instagram.com/kikitheapp/' rel="noreferrer">Instagram</a>,&ensp;
          <a target='_blank' href='https://www.facebook.com/kikitheapp' rel="noreferrer">Facebook</a>,&nbsp;and&ensp;
          <a target='_blank' href='https://www.tiktok.com/@kikitheapp' rel="noreferrer">TikTok</a>.
          You can also join us on Patreon for exclusive content.
          </p>
          <p>
          Kiki For The Future™ was founded in 2020 to address the gap in sexual health resources and education for the LGBTQIA+ community. 
          This lack of education starts early:&ensp;
          <a target='_blank' href='https://www.glsen.org/research/2019-national-school-climate-survey' rel="noreferrer">one study</a>
          &ensp;found that fewer than 8% of LGBT youth have access to positive representations 
          of LGBT sexuality in their sex ed classes. This renders us essentially invisible and creates a barrier to having safe, 
          pleasurable sex lives. We also face healthcare disparities like doctors who are not educated in queer sexual health needs 
          that lead to higher rates of STIs and fewer preventative healthcare visits. Learning about sexual health and pleasure shouldn’t be daunting.
          </p>
          <p>
          We created Kiki For The Future™ as a way to counter the cisgender, heterosexual-centered sex ed that is taught in most schools in the US.
          This platform aims to create space for fun, fact-based, and easy-to-understand discussions about sex. For the newly out to the old pros,
          for everything from basic anatomy to butt plugs, Kiki For The Future™ is about inclusion for all. All genders, all sexualities, all types of sex and relationships.
          </p>
          <p>
            All feedback, comments, requests for technical support and other communications relating to
            the Services should be directed to: <a href="mailto:support@kikitheapp.com">support@kikitheapp.com</a>.
          </p> 
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default AboutUs;

export function Head(){
  return <Seo  title="About Us" siteUrl="aboutus" />
}
