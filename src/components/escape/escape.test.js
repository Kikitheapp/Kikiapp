import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import * as Gatsby from 'gatsby';

import Escape from './escape';


describe("Escape component", () => {

  it("renders the escape button", async () => {
    
    render(<Escape />);

    expect(screen.getByText("EXIT NOW - Press ESC x 3")).toBeInTheDocument();

  });

  it("exits the app when escape is pressed 3 times", async () => {

  });

  it("exits the app when clicked", async () => {
    
  });

  it("does not exit the app when escape is pressed less than 3 times", async () => {

  });

});
