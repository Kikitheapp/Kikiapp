import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './footer';

describe("Footer", () => {

  const footerText1 = "Kiki for the Future™";
  const footerText2 = "Follow us";

  it("renders", async () => {
      
      // render the Footer component
      render(<Footer />);
  
      // check that the footer text is correct
      expect(screen.getByText(footerText1)).toBeInTheDocument();
      expect(screen.getByText(footerText2)).toBeInTheDocument();
  
    });
  
});
