import React from 'react';
import { render } from '@testing-library/react';
import { graphql } from 'gatsby';

import Component, { data } from './{WpPost.slug}';

jest.mock('gatsby', () => ({
  graphql: jest.fn(),
}));

describe('Component should...', () => {
  beforeEach(() => {
    graphql.mockClear();
  });

  it('render without errors', () => {
    render(<Component />);
    // TODO: Add assertions to verify that the component renders without errors
  });
np
  it('fetch post data correctly', () => {
    const mockData = {
      post: {
        id: '1',
        date: '2022-01-01',
        title: 'Test Post',
        content: 'Test content',
        slug: 'test-post',
      },
    };
    graphql.mockResolvedValueOnce({ data: mockData });

    render(<Component />);

    // TODO: Add assertions to verify that the post data is fetched correctly
  });


});


describe('Component should NOT...', () => {
  beforeEach(() => {
    graphql.mockClear();
  });

  it('run injected scripts.', () => {

    const mockData = {
      post: {
        id: '1',
        date: '2022-01-01',
        title: 'Test Post',
        content: '<script>alert("Test")</script>',
        slug: 'test-post',
      },
    };


    render(<Component data={mockData} />);
  });

});
