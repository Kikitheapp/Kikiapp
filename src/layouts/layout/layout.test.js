import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import * as Gatsby from 'gatsby';

import Layout from './layout';


describe("Layout component", () => {
  
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


  it("renders the layout", async () => {
      
      render(<Layout />);
  
      // check for escape button
      expect(screen.getByText("EXIT NOW - Press ESC x 3")).toBeInTheDocument();

    }
  );

});
