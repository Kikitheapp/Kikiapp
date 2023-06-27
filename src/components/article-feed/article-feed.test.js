import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import ArticleFeed from "./article-feed";

describe("ArticleFeed", () => {

  const sectionHeading = "Our latest posts...";

  it("renders", async () => {
      
      render(<ArticleFeed />);
  
      // Find heading, throw error if not found.
      const heading = await screen.findByText(sectionHeading);
  });

});
