import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import Index from "./index";
import userEvent from '@testing-library/user-event';

describe("Index", () => {
  
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

  // it("has button that links to mailing list signup page", async () => {

  //   const user = userEvent.setup();

  //   render(<Index />);

  //   // Find button
  //   const button = await screen.findByText(mockButtonText);
  //   await user.click(button);

  //   console.log(screen);


  // });

});
