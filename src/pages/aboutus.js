import * as React from "react";
import Layout from '../layouts/layout/layout.js';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';


import './aboutus.css';

const AboutUs = () => {
  return (
    <div><Layout pageTitle='Learn About Us - Kiki for the Future'>
      <div className="row p-5 justify-content-center">
        <div className="col-md-10 col-xl-10 about-kiki">
          <p>
          We are Kiki For The Future™. We are creating an app that curates sexual health resources for the queer community. 
          We are a platform for queer sexual education, for sexual liberation, for knowledge, for power, joy, freedom, and connection. 
          Stay tuned for the launch of our app. For now, check out our&nbsp;
          <a target='_blank' href='https://medium.com/kiki-app' rel="noreferrer">blog</a>, 
          sign up for our&nbsp;
          <Link target='_blank' to='/mailinglist' rel="noreferrer">newsletter</Link>, and follow us on&nbsp;
          <a target='_blank' href='https://www.instagram.com/kikitheapp/' rel="noreferrer">Instagram</a>,&nbsp;
          <a target='_blank' href='https://www.facebook.com/kikitheapp' rel="noreferrer">Facebook</a>,&nbsp;
          <a target='_blank' href='https://twitter.com/kikitheapp' rel="noreferrer">Twitter</a>,
          &nbsp;and&nbsp;
          <a target='_blank' href='https://www.tiktok.com/@kikitheapp?' rel="noreferrer">TikTok</a>.
          You can also join us on Patreon for exclusive content.
          </p>
          <p>
          Kiki For The Future™ was founded in 2020 to address the gap in sexual health resources and education for the LGBTQIA+ community. 
          This lack of education starts early:&nbsp;
          <a target='_blank' href='https://www.glsen.org/research/2019-national-school-climate-survey' rel="noreferrer">one study</a>&nbsp;
          found that fewer than 8% of LGBT youth have access to positive representations 
          of LGBT sexuality in their sex ed classes. This renders us essentially invisible and creates a barrier to having safe, 
          pleasurable sex lives. We also face healthcare disparities like doctors who are not educated in queer sexual health needs 
          that lead to higher rates of STIs and fewer preventative healthcare visits. Learning about sexual health and pleasure shouldn’t be daunting.
          </p>
          <p>
          We created Kiki For The Future™ as a way to counter the cisgender, heterosexual-centered sex ed that is taught in most schools in the US.
          This platform aims to create space for fun, fact-based, and easy-to-understand discussions about sex. For the newly out to the old pros,
          for everything from basic anatomy to butt plugs, Kiki For The Future™ is about inclusion for all. All genders, all sexualities, all types of sex and relationships.
          </p>
        </div>
      </div>
        <div className='block'></div>
        <div>
      </div>
      <div className="row p-5 justify-content-center">
        <div className="col-md-10 col-xl-10 text-center">
          <h1 className='header-1'>Meet Our Badass Team</h1>
        </div>
      </div>
      <div className="row p-5 g-5 justify-content-start">
        <div className=' col-lg-5 col-xl-4 about-us-container'>
          <div className='bio grow'>
            <h4>Krista White (She, Her, Hers)</h4>
            <StaticImage className='bio-img' src='../assets/images/aboutus/krista.png'
              alt='Krista White (Founder)'></StaticImage>
            <h3>Founder</h3>
            <div className='about-us-content'>
              <p>
                Krista White is a queer, Black writer and actor who decided to take a UX Design 
                class on a whim in 2019. She fell in love with her final project, a prototype 
                for the sexual health app that would become Kiki. She is thrilled to be working 
                with an incredible team to bring this work to fruition. Based in New York City, 
                she loves sci-fi, baking, and writing fiction.
              </p>
              <p>
              Blog:{' '}
              <a href='https://www.aroundtheworldin80plays.com' target='_blank' rel='noopener noreferrer'>
                aroundtheworldin80plays.com
              </a>
              <br></br>
              Twitter:{' '}
              <a href='https://www.twitter.com/thekristawhite' target='_blank' rel='noopener noreferrer'>
                @thekristawhite
              </a>
              <br></br>
              Instagram:{' '}
              <a href='https://www.instagram.com/thekristawhite/' target='_blank' rel='noopener noreferrer'>
                @thekristawhite
              </a>
              <br></br>
              LinkedIn:{' '}
              <a href='https://www.linkedin.com/in/kristawhite3' target='_blank' rel='noopener noreferrer'>
                kristawhite3
              </a>
              </p>
            </div>
          </div>
        </div>
        <div className=' col-lg-5 col-xl-4 about-us-container'>
          <div className='bio grow'>
            <h4>Nicholas Frattaroli (He, Him, His)</h4>
            <StaticImage className='bio-img' src='../assets/images/aboutus/nick.jpg'
              alt='Nick Frattaroli (Web Dev)'></StaticImage>
            <h3>Web Developer</h3>
            <div className='about-us-content'>
              <p>
                Nick is a Web Developer based out of NYC. As a proud member of the Bear community He is excited 
                to help bring sexual health and education to underserved members of the LGBTQ+ community. An 
                avid fan of all things Nerdy(From ESports to D&D) he is excited to help others by aiding in 
                format to disseminate helpful information in one convenient place.
              </p>
              <p>
                LinkedIn:{' '}
                <a href='https://www.linkedin.com/in/nafratt/' target='_blank'
                  rel='noopener noreferrer'>
                  Nicholas-Frattaroli
                </a>
                <br></br>
                Github:{' '}
                <a href='https://github.com/Nfratt' target='_blank' rel='noopener noreferrer'>
                  Github.com/Nfratt
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className=' col-lg-5 col-xl-4 about-us-container'>
          <div className='bio grow'>
            <h4>Kate Bader (She,Her,Hers)</h4>
            <StaticImage className='bio-img' src='../assets/images/aboutus/kate.jpg'
              alt='Kate Bader(Social Media Manager)'></StaticImage>
            <h3>Social Media Manager</h3>
            <div className='about-us-content'>
              <p>
              Kate Bader is a NYC based actor and about-us-content creator, with a
                  background in film production, marketing, and healthcare. She
                  adores the way social media bridges community engagement,
                  visual aesthetics, entertainment, and digestible knowledge.
                  She is excited to be working on this team of talented
                  individuals, and helping to bring curated sexual health info
                  to a community she loves.
              </p>
              <p>Instagram:{' '}
                <a href='https://www.instagram.com/kate_bader_/' target='_blank'
                  rel='noopener noreferrer'>
                  @Kate_bader_
                </a></p>
            </div>
          </div>
        </div>
        <div className=' col-lg-5 col-xl-4 about-us-container'>
          <div className='bio grow'>
            <h4>Mick Franco (He,Him,His)</h4>
            <StaticImage className='bio-img' src='../assets/images/aboutus/mick.jpg'
              alt='Mick Franco (Data Scientist)'></StaticImage>
            <h3>Data Scientist</h3>
            <div className='about-us-content'>
            <p>
              Mick is a Data Scientist based in Connecticut. As a proud
                  member of the LGBTQ community, he excited to contribute his
                  analytical skills to helping the team identify underserved
                  groups and the sexual health information that they need but
                  might not be able to find elsewhere. He always likes to stay
                  abreast of current events, but is also passionate about
                  cooking, gardening, and hockey (go Bruins!).
              </p>
              <p> LinkedIn:{' '}
                <a href='https://www.linkedin.com/in/michael-j-franco-jr/' target='_blank'
                  rel='noopener noreferrer'>
                  michael-j-franco-jr
                </a></p>
            </div>
          </div>
        </div>
        <div className=' col-lg-5 col-xl-4 about-us-container'>
          <div className='bio grow'>
          <h4>Jesse Green (They/Them)</h4>
            <StaticImage className='bio-img' src='../assets/images/aboutus/jesse.jpg'
              alt='Jesse Green (Web Developer)'></StaticImage>
            <h3>Web Developer</h3>
            <div className='about-us-content'>
            <p>
                  Jesse is a Web Developer based out of Salt lake city, Utah. As
                  part of the LGBTQ community, They are excited to help build a
                  safe sex education to contribrute to the members around them.
                  Also shining positivity in queer spaces that sometimes get
                  look over. They love to bake, paint, and go hiking with their
                  goldendoodle. You can also catch them at a local coffeeshop
                  drinking a latte if your lucky.
              </p>
              <p> Instagram:{' '}
                <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/queer_moonchild/'>
                  @queer_moonchild
                </a></p>
            </div>
          </div>
        </div>
        <div className=' col-lg-5 col-xl-4 about-us-container'>
          <div className='bio grow'>
          <h4>Amanda Lynn Castonguay (They/Them, She/Her)</h4>
            <StaticImage className='bio-img' src='../assets/images/aboutus/amanda.jpg'
              alt='Amanda Lynn Castonguay (Web Developer)'></StaticImage>
            <h3>Web Developer</h3>
            <div className='about-us-content'>
            <p>
            Amanda Lynn is a Full-Stack Engineer, with a passion for teamwork and usability, 
            who lives and worksin Portland, Maine. As a member of the LGBTQ+ community and an advocate 
            for diversity in tech, they’re exited to work on a project that gives back to this community. 
            When not working on one of their many projects, you can find Amanda tending to pet fish or 
            riding their bike. Although, if it is summer, they are probably at the beach.
            </p>
              <p> LinkedIn:{' '}
                <a href='https://www.linkedin.com/in/alcastonguay/' target='_blank'
                  rel='noopener noreferrer'>Amanda Castonguay</a>
                <br></br>
                Github:{' '}
                <a href='https://github.com/alcastonguay' target='_blank'
                  rel='noopener noreferrer'>alcastonguay
                </a>
                <br></br>
                Portfolio:{' '}
                <a href='https://amandalynn.media' target='_blank'
                  rel='noopener noreferrer'>alcastonguay
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className=' col-lg-5 col-xl-4 about-us-container'>
          <div className='bio grow'>
          <h4>Jill Bradshaw (They/Them)</h4>
            <StaticImage className='bio-img' aspectRatio='1' src='../assets/images/aboutus/jill.jpg'
              alt='Jill Bradshaw (Marketing Assistant)'></StaticImage>
            <h3>Marketing Assistant</h3>
            <div className='about-us-content'>
            <p>
            Jill is a queer trans non-binary actor/writer based in NYC. Accessible sex 
                education for all is something they are extremely passionate about 
                so they are absolutely thrilled to be part of Kiki’s team. Besides Kiki, 
                Jill is dedicated to bringing representation to entertainment and is currently 
                developing a series focused on two non-binary leads set to shoot in the spring!
            </p>
              <p>Instagram:{' '}
                <a href='https://www.instagram.com/thejillbradshaw/' target='_blank'
                  rel='noopener noreferrer'>
                  @thejillbradshaw
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout></div>
  )
}

export default AboutUs;
