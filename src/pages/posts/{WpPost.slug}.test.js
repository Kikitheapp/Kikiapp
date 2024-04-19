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
    render(<Component data={postHappy} />);
  });




});


describe('Component should NOT...', () => {


  it('run injected scripts.', () => {


    //render(<Component data={postHappy} />);
  });

});
