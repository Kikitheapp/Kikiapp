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

  it("renders default metadata", async () => {

    // render the SEO component
    render(<SEO />);
    
    // check that the title is correct
    expect(document.title).toBe("Kiki For The Future");

    // check that the essential meta tags are correct
    const ogTitle = document.querySelector('meta[property="og:title"]');
    expect(ogTitle).toHaveAttribute("content", "Kiki For The Future");

    const ogType = document.querySelector('meta[property="og:type"]');
    expect(ogType).toHaveAttribute("content", "article");

    const ogImage = document.querySelector('meta[property="og:image"]');
    expect(ogImage).toHaveAttribute("content", "https://kikitheapp.com/card.png");

    const ogUrl = document.querySelector('meta[property="og:url"]');
    expect(ogUrl).toHaveAttribute("content", "https://kikitheapp.com");

    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    expect(twitterCard).toHaveAttribute("content", "summary_large_image");

    // check that the non-essential meta tags are correct
    const ogDescription = document.querySelector('meta[property="og:description"]');
    expect(ogDescription).toHaveAttribute("content", "Kiki For The Future. Get a fresh take on what you didn't learn in sex-ed.");

    const ogSiteName = document.querySelector('meta[property="og:site_name"]');
    expect(ogSiteName).toHaveAttribute("content", "Kiki For The Future");

    const twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');
    expect(twitterImageAlt).toHaveAttribute("content", "Kiki For The Future. Get a fresh take on what you didn't learn in sex-ed.");

  });

});