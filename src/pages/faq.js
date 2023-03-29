import * as React from "react";

import Layout from '../layouts/layout/layout.js';
import PageHeading from '../components/pageheading/page-heading.js';
import Accordion from '../components/accordion/accordion.js';

import headingPerson1 from "../assets/images/faq/faq-person-header-2.svg";
import headingPerson2 from "../assets/images/faq/faq-person-header-1.svg";
import relAndConsentPerson from "../assets/images/faq/faq-person-rel-and-consent.svg";
import stisStdsPerson from "../assets/images/faq/faq-person-stis-stds.svg";
import sexualPleasurePerson from "../assets/images/faq/faq-person-sexual-pleasure.svg";
import healthPerson from "../assets/images/faq/faq-person-health.svg";



const headingInfo = {
  title: 'FAQ',
  bgColor: 'secondary',
  person1: headingPerson1,
  person2: headingPerson2
}

// markup
const Faq = () => {
  return (
    <div>
      <Layout pageTitle='FAQ - Kiki for the Future'>
        <PageHeading info={headingInfo}></PageHeading>
        <div className="wrapper pb-5">
          <Accordion title="STIs/STDs, Testing, and Barriers">
            <ul>
                <li>
                    <a href='https://medium.com/kiki-app/hiv-aids-101-5ede46dd1394'target='_blank' 
                        rel='noopener noreferrer'>
                        HIV/AIDs 101
                    </a>
                </li>
                <p>The first STI/STD on many people’s minds is HIV/AIDS. Our HIV/AIDS 101 Guide helps break it down.</p>
                <li>
                    <a href='https://medium.com/kiki-app/how-to-get-tested-for-stis-35938800f54' target='_blank' 
                        rel='noopener noreferrer' >
                        How To Get Tested
                    </a>
                </li>
                <p>The lowdown on where, how, and when to get tested for STIs.</p>
            </ul>
            <img src={stisStdsPerson} className="img-fluid align-self-center" 
            alt="Person with yellow shirt, jeans, and a pony tail leaning up against person with orange jacket, gray sweater, 
                white pants, and a pony tail." />
          </Accordion>
          <Accordion title="Sexual Pleasure">
              <ul>
                  <li>
                      <a href='https://kikiapp.medium.com/intro-to-anal-sex-fd609bc73442' target='_blank' rel='noopener noreferrer'>
                          Intro to Anal
                      </a>
                      <p>A beginner’s guide to butt stuff, from prostate pleasure to dealing with the messy bits.</p>
                  </li>
              </ul>
              <img src={sexualPleasurePerson} className="img-fluid align-self-center accordion-person" 
                  alt="Two people wearing tank tops in a bed with a blue polka dot comforter." />
          </Accordion> 
          <Accordion title="Reproductive Health">
              <ul>
                  <li>
                      <a href='https://kikiapp.medium.com/what-you-need-to-know-about-birth-control-6ea439bdef2b' 
                      target='_blank' rel='noopener noreferrer'>
                          What You Need To Know About Birth Control
                      </a>
                      <p>A gender-neutral guide to birth control basics. Your body. Your choice.</p>
                  </li>
              </ul>
              <img src={healthPerson} className="img-fluid align-self-center accordion-person"
                  alt="Two people holding hands, one wearing tan slacks and a white shirt, and one wearing a brown skirt, tan shirt, and a brown purse." />
          </Accordion>
          <Accordion title="Relationships and Consent">
              <ul>
                  <li>
                      <a href='https://medium.com/kiki-app/consent-is-mandatory-6faa308c7251' 
                          target='_blank' rel='noopener noreferrer'>
                          Consent Is Mandatory
                      </a>
                      <p>The basics of sexual consent. The foundation to any sexual or romantic relationship.</p>
                  </li>
              </ul>
              <img src={relAndConsentPerson} className="img-fluid align-self-center"
                  alt="Two people embracing, one wearing shorts and a t-shirt who is lifted slightly off the ground, and the other wearing tan pants and a white t-shirt." />
          </Accordion>
        </div>
      </Layout>
    </div>
  )
}

export default Faq;
