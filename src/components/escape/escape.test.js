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

});