import React from 'react';
import { graphql } from 'gatsby';
import DOMPurify from 'isomorphic-dompurify';

import SEO from '../../components/seo/seo';
import Layout from '../../layouts/mlayout/mlayout';

import './index.css';

let pageMetadata = {
  title: 'Post',
  description: 'Latest post from Kiki for the Future',
};


function Component(props){

  const post = props.data.post;

  let title = <h1 className="text-center my-3 mt-5">{post.title}</h1>;
  if(post.featuredImage){
    title = <img className="img-fluid" src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText} />;
  } 

  pageMetadata.title = post.title;

  return (
    <Layout pageTitle={post.title}>
    <div className="post">
      <div className="post-title">
        {title}
        <p className="post-author">{new Date(post.date).toLocaleDateString()} by {post.author.node.name}</p>
      </div>
      <div className="post-text" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.content) }} />
    </div>
    </Layout>
  );
};

export default Component;

export const data = graphql`
    query($slug : String) {
      post: 
        wpPost(slug: {eq: $slug}) {
          id
          date
          title
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          author {
            node {
              name
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
