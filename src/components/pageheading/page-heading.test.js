import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import PageHeading from './page-heading';
import person1 from "../assets/images/prep/prep-person-header-1.svg";
import person2 from "../assets/images/prep/prep-person-header-2.svg";


describe("PageHeading component", () => {

  const info = {
    title: 'Page Title',
    bgColor: 'peach-puff',
    person1: person1,
    person2: person2
  }

  const metadata = {
    title: 'Page Title',
    description: 'This is the page description. Check out how cool it is!'
  }

  it("renders heading", async () => {

    // render the PageHeading component
    render(<PageHeading info={info} metadata={metadata} />);

    // check that the title is correct
    expect(screen.getByText(metadata.title)).toBeInTheDocument();

  });

  it("renders subheading", async () => {

    // render the PageHeading component
    render(<PageHeading info={info} metadata={metadata} />);

    // check that the description is correct
    expect(screen.getByText(metadata.description)).toBeInTheDocument();

  });

  it("renders person1", async () => {

    // render the PageHeading component
    render(<PageHeading info={info} metadata={metadata} />);

    // check that the person1 image is correct
    expect(screen.getByAltText("Person looking right.")).toBeInTheDocument();

  });

  it("renders person2", async () => {

    // render the PageHeading component
    render(<PageHeading info={info} metadata={metadata} />);

    // check that the person2 image is correct
    expect(screen.getByAltText("Person looking left.")).toBeInTheDocument();

  });

});
