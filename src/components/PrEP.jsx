import React from 'react'
import '../AboutUs.css'
import './prep.css'
import Accordion from './accordion'



//   ReactDOM.render(<App />, document.getElementById("app"));


const PrEP = () => {

    return (
        <div className="wrapper">
            <Accordion title="What is PrEP?">
                PrEP (full name pre-exposure prophylaxis) is a daily medication that helps prevent the transmission of HIV in people 
                who have not yet been exposed. There are two types - Truvada, which protects all people at risk through sex or drug injection, 
                and Descovy, which protects people assigned male at birth from getting HIV from sexual contact. PrEP is a revolutionary 
                medication that has drastically changed the outcomes for people at risk for HIV since it was introduced in 2012.
      </Accordion>
            <Accordion title="Who Should Start PrEP?">
                PrEP (specifically Truvada) is highly effective (more than 90%)  in preventing HIV transmission from sex for people of all 
                genders and sexualities. People who might take PrEP include folks with a sexual partner who is HIV positive, folks with a partner 
                whose HIV status is unknown, people who have tested positive for an STI in the past 6 months (which puts them at higher risk for 
                contracting HIV), and people who inject non-prescription drugs. Chat with your doctor if you think PrEP might be right for you.
      </Accordion>
            <Accordion title="Where To Get It?">
                PrEP is covered under most private and public health insurance. Check out this directory for PrEP providers near you. 
                It is also available through telehealth companies like Folx
      </Accordion>
            <Accordion title="Other Things To Know">
                <p> It’s important that you take your PrEP pills every day. If you skip pills, there may not be enough of the medication in your system to block 
                    transmission of HIV.</p>
                <p> Since PrEP is just for HIV prevention, you still need to take precautions like barrier methods and regular testing to prevent other STIs/STDs.</p>
                <p> Side effects like nausea, loss of appetite, and headaches may occur, but usually go away over time</p>
                <p>Once you’re on PrEP, you’ll need to visit your doctor once every three months for follow-ups on how the medication is working and an HIV test. 
                    This may take the form of an in-person visit or a home test and telemedicine visit.</p>
                <p> If you’ve been exposed to HIV and aren’t on PrEP, you can take PEP (post-exposure prophylaxis) within 72 hours of exposure. The sooner you can get
                     PEP, the more effective it is, and it must be taken daily for 28 days.</p>
            </Accordion>
            <Accordion title="Sources">
            <div className="sources-links">
                <p>CDC. (2020, November 3). About Prep. HIV Basics.<a href="https://www.cdc.gov/hiv/basics/prep/about-prep.html" target="_blank" without rel="noopener noreferrer">
                    https://www.cdc.gov/hiv/basics/prep/about-prep.html</a></p>
                <p>Planned Parenthood. (n.d.). What Is PrEP. Planned Parenthood. <a href="https://www.plannedparenthood.org/learn/stds-hiv-safer-sex/hiv-aids/prep" target="_blank" without rel="noopener noreferrer">
                    https://www.plannedparenthood.org/learn/stds-hiv-safer-sex/hiv-aids/prep </a></p>
                <p>Please Prep Me. (2021, January 15). Please Prep Me. Please Prep Me. <a href="https://pleaseprepme.org/"target="_blank" without rel="noopener noreferrer">https://pleaseprepme.org/ </a></p>
            </div>
            </Accordion>

        </div>
    )
}

export default PrEP