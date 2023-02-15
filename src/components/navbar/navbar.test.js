import React from "react"
import renderer from 'react-test-renderer';

import Navbar from "./navbar"

describe("Navbar", () => {
  it("renders correctly", () => {
    const navbar = renderer
      .create(<Navbar />)
      .toJSON()
    expect(navbar).toMatchSnapshot()
  })
})