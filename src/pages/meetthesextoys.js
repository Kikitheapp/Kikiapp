import * as React from "react";

import Layout from '../layouts/layout/layout.js';
import PageHeading from '../components/pageheading/page-heading.js';
import SEO from '../components/seo/seo.js';

import person1 from "../assets/images/sextoys/sextoys-person-1.svg";
import person2 from "../assets/images/sextoys/sextoys-person-2.svg";
import dildo from "../assets/images/sextoys/sextoys-dildo.png";
import vibrator from "../assets/images/sextoys/sextoys-vibrator.png";
import buttplug from "../assets/images/sextoys/sextoys-buttplug.png";
import cockring from "../assets/images/sextoys/sextoys-cockring.png";
import whip from "../assets/images/sextoys/sextoys-whip.png";
import lube from "../assets/images/sextoys/sextoys-lube.png";

import './meetthesextoys.css';

const pageMetadata = {
  title: 'Meet The Sex Toys',
  description: 'If sex toys could talk, how would they introduce themselves?'
}

const headingInfo = {
  bgColor: 'light-orange',
  person1: person1,
  person2: person2
}

const SexToys = () => {

  const sexToys = [
                    {
                        name: 'Dildo',
                        emoji: '🌶',
                        starSign: 'Aries',
                        bio: `Hey babe, I can’t wait to be inside you. Use me alone or pop me into a strap-on 
                            for hands-free partner play. Find me in flesh tones or in every color of the 
                            rainbow if that "realistic dick" look isn’t for you. `,
                        image: dildo
                    },
                    {
                        name: 'Vibrator',
                        emoji: '🔥',
                        starSign: 'Gemini',
                        bio: `Good 👏🏾 vibes 👏🏾 only. Perhaps the most truly vers of all my \
                        pals, I can be used by anyone, all over your body. Sometimes I’m feeling cute and \
                        casual, as a discreet little battery-powered lipstick vibe, and sometimes I’m \
                        ready to rumble as the classic magic wand. Rub a dub dub, get a waterproof \
                        version for some fun in the tub.`,
                        image: vibrator
                    },
                    {
                        name: 'Butt Plug',
                        emoji: '🍑',
                        starSign: 'Sagittarius',
                        bio: `Booty booty booty booty rocking everywhere. I fancy myself as being rather \
                        inclusive – everyone’s got a butt, after all. I come in many sizes depending on how \
                        thiccc you like your penetration and how much anal experience you have. Find me in \
                        low tech silicone models or vibrating versions to really get your gears going. \
                        Remember, I’ve gotta have a flared base, or I might get lost inside you. `,
                        image: buttplug
                    },
                    {
                        name: 'Cock Ring',
                        emoji: '🍆',
                        starSign: 'Virgo',
                        bio: `Will you be my main squeeze? I up the pleasure for people with penises by \
                        increasing the blood flow, which can make for stronger erections and more intense \
                        orgasms. Need I say more? Oh and if you want, I can vibrate, which can be a lot of \
                        fun for both you and your partner. `,
                        image: cockring
                    },
                    {
                        name: 'Kitty Whip',
                        emoji: '😈',
                        starSign: 'Scorpio',
                        bio: `I may be bad but I’m perfectly good at it. I’m a great intro for those new to \
                        BDSM and am known for adding a little power and pain play into your regularly \
                        scheduled programming. I’m good for caressing, tickling, and of course, a good hard \
                        smack on the ass. Use me with my friends blindfold and handcuffs to turn things up a \
                        notch. `,
                        image: whip
                    },
                    {
                        name: 'Lube',
                        emoji: '💦',
                        starSign: 'Cancer',
                        bio: `Slippery when wet. I’m best friends with everyone because I like to let things \
                        slide. I come in flavors, in water or aloe based (for skin-to-skin, condoms, and \
                        toys), long-lasting and hypoallergenic silicone-based (for skin-to-skin and condoms) \
                        or oil-based (for skin-to-skin). `,
                        image: lube
                        
                    }
                  ]

  function buildSexToyCards(sexToy) {  
    return (
        <div key={sexToy.name} className="col py-3 align-item-stretch">
            <div className="card bg-light-gray border-0 rounded-lg">
                <div className='d-flex justify-content-center'>
                    <img src={sexToy.image} className="card-img-top rounded-top img-fluid" alt={`Illustration of ${sexToy.name}.`} />
                </div>
                <div className="card-body">
                    <h3 className="card-title" style={{textDecoration: "underline" }}>{sexToy.name}</h3>
                    <h4 className="">Fave Emoji: {sexToy.emoji}</h4>
                    <h4 className="">Star Sign: {sexToy.starSign}</h4>
                    <p className="card-text">
                        {sexToy.bio}
                    </p>
                </div>
            </div>
        </div>
    )
  }

  // Maps each sex toy to a Bootstrap card.
  let sexToyCols = sexToys.map(buildSexToyCards);

  return (
    <div><Layout pageTitle='Meet the Sex Toys - Kiki for the Future'>
      <PageHeading info={headingInfo} metadata={pageMetadata}></PageHeading>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 px-5 sex-toys">
        {sexToyCols} 
      </div>
    </Layout></div>
  )
}

export function Head(){
  return <SEO title={pageMetadata.title} description={pageMetadata.description} />
}

export default SexToys;