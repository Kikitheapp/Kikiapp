import React from 'react';
import { render } from '@testing-library/react';
import { graphql } from 'gatsby';

import PostsPage from './index';

describe('PostsPage should...', () => {
  beforeEach(() => {
    graphql.mockClear();
  });

  it('render without errors', () => {
    render(<PostsPage />);
  });

  it('fetch post data correctly', () => {

  });

});

describe('PostsPage should NOT...', () => {

});
