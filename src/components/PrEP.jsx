import React from 'react';
import Accordion from './accordion';
import Heading from './Heading';
import person1 from "../assets/images/prep-person-1.svg";
import person2 from "../assets/images/prep-person-2.svg";
import person3 from "../assets/images/prep-person-3.svg";
import person4 from "../assets/images/prep-person-4.svg";
import person5 from "../assets/images/prep-person-5.svg";


const PrEP = () => {
    const pageInfo = {
        title: "PrEP Q&A",
        bgColor: "peach-puff",
        person1: person1,
        person2: person2
    }

    return (
        <div className="accordion-page">
        <Heading info={pageInfo}></Heading>
        <div className="wrapper">
            <Accordion title="What is PrEP?">
                <p>PrEP (full name pre-exposure prophylaxis) is a daily medication that helps prevent the transmission of HIV in people 
                who have not yet been exposed. There are two types - Truvada, which protects all people at risk through sex or drug injection, 
                and Descovy, which protects people assigned male at birth from getting HIV from sexual contact. PrEP is a revolutionary 
                medication that has drastically changed the outcomes for people at risk for HIV since it was introduced in 2012.</p>
                <img src={person3} className="img-fluid"
                    alt="Person with jean jacket and jeans giving another person with purple pants and a red jacket a piggy back ride." />
            </Accordion>
            <Accordion title="Who Should Start PrEP?">
                <p>PrEP (specifically Truvada) is highly effective (more than 90%)  in preventing HIV transmission from sex for people of all 
                genders and sexualities. People who might take PrEP include folks with a sexual partner who is HIV positive, folks with a partner 
                whose HIV status is unknown, people who have tested positive for an STI in the past 6 months (which puts them at higher risk for 
                contracting HIV), and people who inject non-prescription drugs. Chat with your doctor if you think PrEP might be right for you.</p>
                <img src={person4} className="img-fluid"
                    alt="Person with jean jacket and jeans giving another person with purple pants and a red jacket a piggy back ride." />
            </Accordion>
            <Accordion title="Where To Get It?">
                <p>PrEP is covered under most private and public health insurance. Check out this directory for PrEP providers near you. 
                It is also available through telehealth companies like Folx</p>
                <img src={person5} className="img-fluid"
                    alt="Person with jean jacket and jeans giving another person with purple pants and a red jacket a piggy back ride." />
            </Accordion>
            <Accordion title="Other Things To Know">
                <ul>
                    <li>  It’s important that you take your PrEP pills every day. If you skip pills, there may not be enough of the medication in your system to block 
                        transmission of HIV.</li>
                    <li>  Since PrEP is just for HIV prevention, you still need to take precautions like barrier methods and regular testing to prevent other STIs/STDs.</li>
                    <li> Side effects like nausea, loss of appetite, and headaches may occur, but usually go away over time</li>
                    <li> Once you’re on PrEP, you’ll need to visit your doctor once every three months for follow-ups on how the medication is working and an HIV test. 
                        This may take the form of an in-person visit or a home test and telemedicine visit.</li>
                    <li>  If you’ve been exposed to HIV and aren’t on PrEP, you can take PEP (post-exposure prophylaxis) within 72 hours of exposure. The sooner you can get
                        PEP, the more effective it is, and it must be taken daily for 28 days.</li>
                </ul>
            </Accordion>
            <Accordion title="Sources">
                <div className="sources-links">
                    <ul>
                        <li>CDC. (2020, November 3). About Prep. HIV Basics.<a href="https://www.cdc.gov/hiv/basics/prep/about-prep.html" target="_blank" rel="noopener noreferrer">
                            https://www.cdc.gov/hiv/basics/prep/about-prep.html</a>
                        </li>
                        <li>Planned Parenthood. (n.d.). What Is PrEP. Planned Parenthood. 
                            <a href="https://www.plannedparenthood.org/learn/stds-hiv-safer-sex/hiv-aids/prep" target="_blank" rel="noopener noreferrer">
                            https://www.plannedparenthood.org/learn/stds-hiv-safer-sex/hiv-aids/prep </a>
                        </li>
                        <li>Please Prep Me. (2021, January 15). Please Prep Me. Please Prep Me. <a href="https://pleaseprepme.org/"target="_blank" rel="noopener noreferrer">
                            https://pleaseprepme.org/ </a>
                        </li>
                    </ul>
                </div>
            </Accordion>

        </div>
        </div>
    )
}

export default PrEP