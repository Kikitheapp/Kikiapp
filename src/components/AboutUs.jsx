import React from 'react';


const AboutUs = () => {
  return (
    <div>
      <div className='SectionContainer'>
        <p>
          We are Kiki. We are creating an app that curates sexual health
          resources for the queer community. We are a platform for queer sexual
          education, for sexual liberation, for knowledge, for power, joy,
          freedom, and connection. Stay tuned for the launch of our app. For
          now, check out our blog, sign up for our newsletter, and follow us on
          social media.
        </p>
        <p>
          Kiki was founded in 2020 to address the gap in sexual health resources
          and education for the LGBTQIA+ community. This lack of education
          starts early: one study found that fewer than 5% of LGBT youth have
          access to positive representations of LGBT sexuality in their sex ed
          classes. This renders us essentially invisible and creates a barrier
          to having safe, pleasurable sex lives. We also face healthcare
          disparities like doctors who are not educated in queer sexual health
          needs that lead to higher rates of STIs and fewer preventative
          healthcare visits. Learning about sexual health and pleasure shouldn’t
          be daunting. We created Kiki as a way to counter the cisgender,
          heterosexual-centered sex ed that is taught in most schools in the US.
          This platform aims to create space for fun, fact-based, and
          easy-to-understand discussions about sex. For the newly out to the old
          pros, for everything from basic anatomy to butt plugs, Kiki is about
          inclusion for all. All genders, all sexualities, all types of sex and
          relationships.
        </p>
      </div>
      <div>
        {'\n'}
        <div className='block'></div>
        <div>
          <h1 className='header-1'>Meet Our Badass Team</h1>
          {'\n'}
          {/* <!-- Bios for the team --> */}
          <div className='about-us-container'>
            <div className='Bio grow'>
              <h4>Krista White (She, Her, Hers)</h4>
              <img
                className='bio-img'
                src='./Assets/images/Krista.png'
                alt='Krista White (Founder)'
              ></img>
              <h3>Founder</h3>
              <div className='about-us-content'>
                <p>
                  Krista White is a queer, Black writer and actor who decided to
                  take a UX Design class on a whim in 2019. She fell in love
                  with her final project, a prototype for the sexual health app
                  that would become Kiki. She is thrilled to be working with an
                  incredible team to bring this work to fruition. Based in New
                  York City, she loves sci-fi, baking, and writing fiction.
                </p>
                Blog:{' '}
                <a
                  id='about-links'
                  href='https://www.aroundtheworldin80plays.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  aroundtheworldin80plays.com
                </a>
                <br></br>
                Twitter:{' '}
                <a
                  id='about-links'
                  href='https://www.twitter.com/thekristawhite'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  @thekristawhite{' '}
                </a>
                <br></br>
                Instagram:{' '}
                <a
                  id='about-links'
                  href='https:www.instagram.com/thekristawhite/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  @thekristawhite{' '}
                </a>
              <br></br>
                LinkedIn:{' '}
                <a
                  id='about-links'
                  href='https:www.linkedin.com/in/kristawhite3'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  kristawhite3
                </a>
              </div>
            </div>
            <div className='Bio grow'>
              <h4>Nicholas Frattaroli (He, Him, His)</h4>
              <img
                className='bio-img'
                src='./Assets/images/Nick.jpg'
                alt='Nick Frattaroli (Web Dev)'
              ></img>
              {'\n'}
              <h3>Web Developer</h3>
              <div className='about-us-content'>
                <p>
                  Nick is a Web Developer based out of NYC. As a proud member of
                  the Bear community He is excited to help bring sexual health
                  and education to underserved members of the LGBTQ+ community.
                  An avid fan of all things Nerdy(From ESports to D&D) he is
                  excited to help others by aiding in the creation of a digital
                  format to disseminate helpful information in one convenient
                  place.
                  {'\n'}
                </p>
                {'\n'}
                LinkedIn:{' '}
                <a
                  id='about-links'
                  href='https:www.linkedin.com/in/nicholas-frattaroli'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Nicholas-Frattaroli{' '}
                </a>
                <br></br>
                Github:{' '}
                <a
                  id='about-links'
                  href='https:github.com/Nfratt'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github.com/Nfratt
                </a>
              </div>
            </div>
            <div className='Bio grow'>
              <h4>Kate Bader (She,Her,Hers)</h4>{' '}
              <img
                className='bio-img'
                src='./Assets/images/Kate.jpg'
                alt='Kate Bader(Social Media Manager)'
              ></img>
              {'\n'}
              <h3>Social Media Manager</h3>{' '}
              <div className='about-us-content'>
                <p>
                  Kate Bader is a NYC based actor and about-us-content creator, with a
                  background in film production, marketing, and healthcare. She
                  adores the way social media bridges community engagement,
                  visual aesthetics, entertainment, and digestible knowledge.
                  She is excited to be working on this team of talented
                  individuals, and helping to bring curated sexual health info
                  to a community she loves. {'\n'}
                </p>
                {'\n'}
                Instagram:{' '}
                <a
                  id='about-links'
                  href='https://www.instagram.com/kate_bader_/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  @Kate_bader_{' '}
                </a>{' '}
              </div>{' '}
            </div>{' '}
            <div className='Bio grow'>
              <h4>Mick Franco (He,Him,His)</h4>{' '}
              <img
                className='bio-img'
                src='./Assets/images/mick.jpg'
                alt='Mick Franco (Data Scientist)'
              ></img>
              {'\n'}
              <h3>Data Scientist</h3>{' '}
              <div className='about-us-content'>
                <p>
                  Mick is a Data Scientist based in Connecticut. As a proud
                  member of the LGBTQ community, he excited to contribute his
                  analytical skills to helping the team identify underserved
                  groups and the sexual health information that they need but
                  might not be able to find elsewhere. He always likes to stay
                  abreast of current events, but is also passionate about
                  cooking, gardening, and hockey (go Bruins!). {'\n'}
                </p>
                {'\n'}
                LinkedIn:{' '}
                <a
                  id='about-links'
                  href='https://www.linkedin.com/in/michael-j-franco-jr/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  michael-j-franco-jr{' '}
                </a>{' '}
              </div>{' '}
            </div>{' '}
            <div className='Bio grow'>
              <h4>Jesse Green (They/Them)</h4>
              <img
                className='bio-img'
                src='./Assets/images/Jesse.jpg'
                alt='Jesse Green(Web Developer)'
              ></img>
              {'\n'}
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
                  {'\n'}
                </p>
                {'\n'}
                Instagram:{' '}
                <a
                  id='about-links'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.instagram.com/queer_moonchild/'
                >
                  @queer_moonchild
                </a>
              </div>
            </div>
            <div className='Bio grow'>
              <h4>Amanda Lynn Castonguay (They/Them, She/Her)</h4>

              <img
                className='bio-img'
                src='./Assets/images/Amanda.jpg'
                alt='Amanda Lynn Castonguay (Web Dev)'
              ></img>
              {'\n'}
              <h3>Web Developer</h3>
              <div className='content'>
                <p>
                  Amanda Lynn is a Full-Stack Engineer, with a passion for teamwork and usability, 
                  who lives and worksin Portland, Maine. As a member of the LGBTQ+ community and an advocate for diversity in tech, 
                  they’re exited to work on a project that gives back to this community. When not working on one of their many projects,
                   you can find Amanda tending to pet fish or riding their bike. Although, if it is summer, they are probably at the beach.
                  {'\n'}
                </p>
                {'\n'}
                LinkedIn:{' '}
                <a
                  id='about-links'
                  href='https://www.linkedin.com/in/alcastonguay/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Amanda Castonguay{' '}
                </a>
                <br></br>

                Github:{' '}
          
                <a
                  id='about-links'
                  href='https://github.com/alcastonguay'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                 alcastonguay {' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutUs;
