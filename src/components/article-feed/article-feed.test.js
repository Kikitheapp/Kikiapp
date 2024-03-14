import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import ArticleFeed from './article-feed';

describe("ArticleFeed component", () => {

  it("renders the article feed", async () => {
    
    render(<ArticleFeed />);

    expect(screen.getByText("Kiki for the Future")).toBeInTheDocument();

  });


});
