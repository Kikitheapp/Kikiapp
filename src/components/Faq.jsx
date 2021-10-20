import React from "react";
import person1 from "../assets/images/faq-person-1.svg";
import person2 from "../assets/images/faq-person-2.svg";
import person4 from "../assets/images/prep-person-4.svg";
import person5 from "../assets/images/prep-person-5.svg";
import person6 from "../assets/images/prep-person-6.svg";
import person9 from "../assets/images/prep-person-9.svg";
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
                            HIV/AIDs 101
                        </a>
                    </li>
                    <p>The first STI/STD on many people’s minds is HIV/AIDS. Our HIV/AIDS 101 Guide helps break it down.</p>
                    <li>
                        <a href='https://medium.com/kiki-app/how-to-get-tested-for-stis-35938800f54' target='_blank'rel='noopener noreferrer' >
                            How To Get Tested
                        </a>
                    </li>
                    <p>The lowdown on where, how, and when to get tested for STIs.</p>
                </ul>
                <img src={person5} className="img-fluid align-self-center"alt="Person with jean jacket and jeans giving another person with purple pants and a red jacket a piggy back ride." />
            </Accordion>
             <Accordion title="Sexual Pleasure">
                 <ul>
                     <li>
                        <a a href='https://kikiapp.medium.com/intro-to-anal-sex-fd609bc73442'target='_blank'rel='noopener noreferrer'>
                            Intro to Anal
                        </a>
                        <p>A beginner’s guide to butt stuff, from prostrate pleasure to dealing with the messy bits.</p>
                    </li>
                </ul>
                <img src={person6} className="img-fluid align-self-center prep-person"alt="Person with jean jacket and jeans giving another person with purple pants and a red jacket a piggy back ride." />
            </Accordion> 
            <Accordion title="Reproductive Health">
                <ul>
                    <li>
                        <a href='https://kikiapp.medium.com/what-you-need-to-know-about-birth-control-6ea439bdef2b' target='_blank'rel='noopener noreferrer'>
                            What You Need To Know About Birth Control
                        </a>
                        <p>A gender-neutral guide to birth control basics. Your body. Your choice.</p>
                    </li>
                </ul>
                <img src={person9} className="img-fluid align-self-center prep-person"
                    alt="Person with jean jacket and jeans giving another person with purple pants and a red jacket a piggy back ride." />
            </Accordion>
            <Accordion title="Relationships and Consent">
                <ul>
                    <li>
                        <a href='https://kikiapp.medium.com/what-you-need-to-know-about-birth-control-6ea439bdef2b' target='_blank'rel='noopener noreferrer'>
                            Consent Is Mandatory
                        </a>
                        <p>The basics of sexual consent. The foundation to any sexual or romantic relationship.</p>
                    </li>
                </ul>
                <img src={person4} className="img-fluid align-self-center"
                    alt="Person with jean jacket and jeans giving another person with purple pants and a red jacket a piggy back ride." />
            </Accordion>

            </div>
            </div>
    )   
}

export default FAQ;