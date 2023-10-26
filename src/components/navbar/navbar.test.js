import React from "react"
import * as Gatsby from "gatsby"
import renderer from 'react-test-renderer';

import Navbar from "./navbar"

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


describe("Navbar", () => {
  it("renders correctly", () => {
    const navbar = renderer
      .create(<Navbar />)
      .toJSON()
    expect(navbar).toMatchSnapshot()
  })
})
