import React from 'react';
import { render } from '@testing-library/react';

import Component from './{WpPost.slug}.js';

const postHappy = {
  post: {
    id: '1',
    date: '2022-01-01',
    title: 'Test Post',
    featuredImage: {
      node: {
        altText: 'Test Image',
        sourceUrl: '/blog-card.png', 
      }
    },
    author: { 
      node: {
        name: 'Test Author',
      }
    },
    content: 'Test content',
    slug: 'test-post'
  }
}

const postNoImage = {
  post: {
    id: '1',
    date: '2022-01-01',
    title: 'Test Post',
    featuredImage: {
      node: {
        altText: 'Test Image',
        sourceUrl: '', 
      }
    },
    author: { 
      node: {
        name: 'Test Author',
      }
    },
    content: 'Test content',
    slug: 'test-post'
  }
};


describe('Component should...', () => {
  it('render without errors', () => {

    //graphql.mockResolvedValueOnce({ data: postHappy });
    render(<Component data={postHappy} />);
    // TODO: Add assertions to verify that the component renders without errors
  });

  // it('fetch post data correctly', () => {
  //   graphql.mockResolvedValueOnce({ data: mockData });

  //   render(<Component />);

  //   // TODO: Add assertions to verify that the post data is fetched correctly
  // });


});


describe('Component should NOT...', () => {
  // beforeEach(() => {
  //   graphql.mockClear();
  // });

  // it('run injected scripts.', () => {

  //   const mockData = {
  //     post: {
  //       id: '1',
  //       date: '2022-01-01',
  //       title: 'Test Post',
  //       content: '<script>alert("Test")</script>',
  //       slug: 'test-post',
  //       author: {
  //         node: {
  //           name: 'Test Author',
  //         }
  //       }
  //     }
  //   };


  //   render(<Component data={mockData} />);
  // });

});
