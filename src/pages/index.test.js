import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Index from "./index";
import * as Gatsby from 'gatsby';

describe("Index", () => {

  const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`)
  const mockUseStaticQuery = {
    site: {
      siteMetadata: {
        "blogUrl": "https://medium.com/kiki-app"
      }
    }
  }

  beforeAll(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  
  const mockHeadingText = "Get a fresh take on what you didn't learn in sex-ed.";
  const mockButtonText = "Join our mailing list";
  const mockButtonLink = "/mailinglist";

  it("renders", async () => {
    
    render(<Index />);

    // Find heading, throw error if not found.
    const heading = await screen.findByText(mockHeadingText);

    // Find button, throw error if not found.
    // const button = await screen.findByText(mockButtonText);

  });

});
