import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import DOMPurify from 'dompurify';

import SEO from '../../components/seo/seo';
import Layout from '../../layouts/mlayout/mlayout';


let pageMetadata = {
  title: 'Post',
  description: 'Latest post from Kiki for the Future',
};


export default function Component(props){

  const post = props.data.post;

  let title = <h1>{post.title}</h1>;
  if(post.featuredImage){
    title = <img src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText} />;
  } 


  pageMetadata.title = post.title;

  // TODO: Style the post content
  return (
    <Layout pageTitle={post.title}>
    <div className="post">
      {title}
      <div>
        <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.content) }} />
      </div>
    </div>
    </Layout>
  );
};


export const data = graphql`
    query($slug : String) {
      post: 
        wpPost(slug: {eq: $slug}) {
          id
          date
          title
          excerpt
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          content
          slug
        }
      }
  `;


export function Head(){
  // TODO: Fix the title and description
  return (
    <SEO title="Post" />
  )
}
