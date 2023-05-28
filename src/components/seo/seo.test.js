import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import * as Gatsby from 'gatsby';

import SEO from './seo';


describe("SEO component", () => {

  const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`)
  const mockUseStaticQuery = {
    site: {
      siteMetadata: {
        "description": "Kiki For The Future. Get a fresh take on what you didn't learn in sex-ed.",
        "image": "/card.png",
        "siteUrl": "https://kikitheapp.com",
        "title": "Kiki For The Future"
      }
    }
  }

  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery)
  })

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const defaults = {
    "description": "Kiki For The Future. Get a fresh take on what you didn't learn in sex-ed.",
    "image": "/card.png",
    "siteUrl": "https://kikitheapp.com",
    "title": "Kiki For The Future",
    "type": "article",
    "twitterCard": "summary_large_image",
    "site_name": "Kiki For The Future",
    "twitterImageAlt": "Kiki For The Future. Get a fresh take on what you didn't learn in sex-ed."
  };

  it("renders default metadata", async () => {

    // render the SEO component
    render(<SEO />);
    
    // check that the title is correct
    expect(document.title).toBe(defaults.title);

    // check that the essential meta tags are correct
    const ogTitle = document.querySelector('meta[property="og:title"]');
    expect(ogTitle).toHaveAttribute("content", defaults.title);

    const ogType = document.querySelector('meta[property="og:type"]');
    expect(ogType).toHaveAttribute("content", defaults.type);

    const ogImage = document.querySelector('meta[property="og:image"]');
    expect(ogImage).toHaveAttribute("content", defaults.siteUrl + defaults.image);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    expect(ogUrl).toHaveAttribute("content", defaults.siteUrl);

    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    expect(twitterCard).toHaveAttribute("content", defaults.twitterCard);

    // check that the non-essential meta tags are correct
    const ogDescription = document.querySelector('meta[property="og:description"]');
    expect(ogDescription).toHaveAttribute("content", defaults.description);

    const ogSiteName = document.querySelector('meta[property="og:site_name"]');
    expect(ogSiteName).toHaveAttribute("content", defaults.title);

    const twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');
    expect(twitterImageAlt).toHaveAttribute("content", defaults.twitterImageAlt);

  });

  it("overrides default title", async () => {

    let overrides = { 
      title: "Testing title",
    }

    // render the SEO component
    render(<SEO title={overrides.title} />);

    // check that the title is correct
    expect(document.title).toBe(`${overrides.title} - ${defaults.title}`);

  });

  it("overrides default description", async () => {
      
      let overrides = { 
        description: "Let's describe this testing description.",
      }
  
      // render the SEO component
      render(<SEO description={overrides.description} />);
  
      // check that the description is correct
      const ogDescription = document.querySelector('meta[property="og:description"]');
      expect(ogDescription).toHaveAttribute("content", overrides.description);

      // check that the twitter image alt is correct
      const twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');
      expect(twitterImageAlt).toHaveAttribute("content", overrides.description);
  
  });

  it("overrides default image", async () => {
        
        let overrides = { 
          image: "/testImage.png",
        }
    
        // render the SEO component
        render(<SEO image={overrides.image} />);
    
        // check that the image is correct
        const ogImage = document.querySelector('meta[property="og:image"]');
        expect(ogImage).toHaveAttribute("content", defaults.siteUrl + overrides.image);
    
  });

  it("overrides default siteUrl", async () => {

    let overrides = { 
      siteUrl: "test",
    }

    // render the SEO component
    render(<SEO siteUrl={overrides.siteUrl} />);

    console.log(defaults);

    // check that the siteUrl is correct
    const ogUrl = document.querySelector('meta[property="og:url"]');
    expect(ogUrl).toHaveAttribute("content", defaults.siteUrl + '/' + overrides.siteUrl);
  });

  it("updates the title when the page changes", async () => {

    let overrides = { 
      title: "Title After Click",
    }

    // render the SEO component with default title, and check that it is correct
    const {rerender} = render(<SEO />);
    expect(document.title).toBe(defaults.title);

    // simulate a page change, and check that the title is correct
    rerender(<SEO title={overrides.title} />);
    expect(document.title).toBe(`${overrides.title} - ${defaults.title}`);
    
  });

  it("updates the description when the page changes", async () => {
      
      let overrides = { 
        description: "Description After Click",
      }
  
      // render the SEO component with default description, and check that it is correct
      const {rerender} = render(<SEO />);
      const ogDescription = document.querySelector('meta[property="og:description"]');
      expect(ogDescription).toHaveAttribute("content", defaults.description);
  
      // simulate a page change, and check that the description is correct
      rerender(<SEO description={overrides.description} />);
      expect(ogDescription).toHaveAttribute("content", overrides.description);

      // check that the twitter image alt is correct
      const twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');
      expect(twitterImageAlt).toHaveAttribute("content", overrides.description);
      
    });

    it("updates the image when the page changes", async () => {
    
      let overrides = {
        image: "/testImage2.png",
      }

      // render the SEO component with default image, and check that it is correct
      const {rerender} = render(<SEO />);
      const ogImage = document.querySelector('meta[property="og:image"]');
      expect(ogImage).toHaveAttribute("content", defaults.siteUrl + defaults.image);

      // simulate a page change, and check that the image is correct
      rerender(<SEO image={overrides.image} />);
      expect(ogImage).toHaveAttribute("content", defaults.siteUrl + overrides.image);

    });

    it("updates the siteUrl when the page changes", async () => {
      
        let overrides = {
          siteUrl: "test2",
        }
  
        // render the SEO component with default siteUrl, and check that it is correct
        const {rerender} = render(<SEO />);
        const ogUrl = document.querySelector('meta[property="og:url"]');
        expect(ogUrl).toHaveAttribute("content", defaults.siteUrl);
  
        // simulate a page change, and check that the siteUrl is correct
        rerender(<SEO siteUrl={overrides.siteUrl} />);
        expect(ogUrl).toHaveAttribute("content", defaults.siteUrl + '/' + overrides.siteUrl);
  
      });
    

});