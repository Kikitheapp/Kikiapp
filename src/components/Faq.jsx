import React from "react";
import person1 from "../assets/images/faq-person-1.svg";
import person2 from "../assets/images/faq-person-2.svg";
import person3 from "../assets/images/prep-person-3.svg";
import person4 from "../assets/images/prep-person-4.svg";
import person5 from "../assets/images/prep-person-5.svg";

import Accordion from './accordion';
const FAQ = () => {
    return (
        <div className="accordion-page">
            <h2 className="text-center bg-peach-puff">FAQ</h2>
            <div className="prep-people row justify-content-center mb-5">
                <div className="prep-person-1 col-6 text-right">
                    <img src={person2} className="img-fluid"
                        alt="Person with white shirt and blue skirt walking to meet person
                    on right." />
                </div>
                <div className="prep-person-2 col-6">
                    <img src={person1} className="img-fluid"
                        alt="Person with orange jacket and blue jeans walking to meet person 
                    on left."/>
                </div>
            </div>
        <div className="wrapper">
            <Accordion title="STIs/STDs, Testing, and Barriers">
                <ul>
                    <li>
                        <a href='https://medium.com/kiki-app/hiv-aids-101-5ede46dd1394'target='_blank'rel='noopener noreferrer'>
                            <p>HIV/AIDs 101</p>
                        </a>
                    </li>
                    <p>The first STI/STD on many people’s minds is HIV/AIDS. Our HIV/AIDS 101 Guide helps break it down.</p>
                    <li>
                        <a href='https://medium.com/kiki-app/how-to-get-tested-for-stis-35938800f54' target='_blank'rel='noopener noreferrer' >
                            <p>How To Get Tested</p>
                        </a>
                </li>
                    <p>The lowdown on where, how, and when to get tested for STIs.</p>
                </ul>
                <img src={person3} className="img-fluid"alt="Person with jean jacket and jeans giving another person with purple pants and a red jacket a piggy back ride." />
            </Accordion>
            {/* <Accordion title="Sexual Pleasure"> */
          /* This link is currently returning a 404 keep out for now */
            /* <a a href='https://kikiapp.medium.com/intro-to-anal-sex-fd609bc73442'target='_blank'rel='noopener noreferrer'>
            /* <p>A beginner’s guide to butt stuff.</p>
            /* <img src={person3} className="img-fluid"alt="Person with jean jacket and jeans giving another person with purple pants and a red jacket a piggy back ride." />
            /* </Accordion> */}
            <Accordion title="Reproductive Health">
                <ul>
                    <li>
                        <a href='https://kikiapp.medium.com/what-you-need-to-know-about-birth-control-6ea439bdef2b' target='_blank'rel='noopener noreferrer'>
                            <p>What You Need To Know About Birth Control</p>
                        </a>
                        <p>A gender neutral guide to birth control basics.</p>
                    </li>
                </ul>
                <img src={person4} className="img-fluid"
                    alt="Person with jean jacket and jeans giving another person with purple pants and a red jacket a piggy back ride." />
            </Accordion>
            <Accordion title="Relationships and Consent">
                <ul>
                    <li>
                        <a href='https://kikiapp.medium.com/what-you-need-to-know-about-birth-control-6ea439bdef2b' target='_blank'rel='noopener noreferrer'>
                            <p>Consent Is Mandatory</p>
                        </a>
                        <p>
                        The basics of sexual consent.
                        </p>
                    </li>
                </ul>
                <img src={person5} className="img-fluid"
                    alt="Person with jean jacket and jeans giving another person with purple pants and a red jacket a piggy back ride." />
            </Accordion>

            </div>
            </div>
    )   
}

export default FAQ;