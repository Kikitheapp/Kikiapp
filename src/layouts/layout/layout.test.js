import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import * as Gatsby from 'gatsby';

import Layout from './layout';


describe("Layout component", () => {

  it("renders the layout", async () => {
      
      render(<Layout />);
  
      // check for escape button
      expect(screen.getByText("EXIT NOW - Press ESC x 3")).toBeInTheDocument();

      // check for footer text
      expect(screen.getByText("Kiki for the Future™")).toBeInTheDocument();
  
    }
  );

});