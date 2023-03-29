import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import PageHeading from './page-heading';
import person1 from "../assets/images/sextoys/sextoys-person-1.svg";
import person2 from "../assets/images/sextoys/sextoys-person-2.svg";

describe("Page Heading", () => {
  
  const info = {
    title: "Test Heading",
    bgColor: "primary",
    person1: person1,
    person2: person2
  }

  it("renders heading and people", async () => {    
      
      render(<PageHeading info={info} />);
  
      // Find heading, throw error if not found.
      const heading = await screen.getByText(info.title);
      // Check that heading has correct background color.
      expect(heading).toHaveClass("bg-"+info.bgColor);

      // Find people, throw error if not found.
      const person1 = screen.getByAltText("Person looking right.");
      expect(person1).toHaveAttribute("src", info.person1);
      const person2 = screen.getByAltText("Person looking left.");
      expect(person2).toHaveAttribute("src", info.person2);

  });

});
