import React from 'react';
import {render, screen} from '@testing-library/react';

import renderer  from 'react-test-renderer';

import '@testing-library/jest-dom';
import Footer from './footer';

describe("Footer", () => {

  const year = new Date().getFullYear();

  const footerText1 = "Kiki for the Future®";
  const footerText2 = "Follow us";
  const footerText3 = `© 2021-${year} Kiki for the Future`;

  it("renders", async () => {
      

    // render the Footer component
    render(<Footer />);

    // check that the footer text is correct
    expect(screen.getByText(footerText1)).toBeInTheDocument();
    expect(screen.getByText(footerText2)).toBeInTheDocument();
    expect(screen.getByText(footerText3)).toBeInTheDocument();

  });

  it("matches snapshot", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
 });

