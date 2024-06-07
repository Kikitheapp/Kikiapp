import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../layouts/mlayout/mlayout';
import Seo from '../../components/seo/seo';

import ArticleTopics from '../../components/article-topics/article-topics';
import ArticleCard from '../../components/article-card/article-card';

import './index.css';


export default function Component(props) {

  const category = props.pageContext.name;

  const posts = props.data.catagory.nodes;

  let postCards = posts.map((post) => {
    return <div className="col-md-4 my-1" key={post.id}><ArticleCard post={post} /></div>;
  });

  let topCards = postCards.splice(0, 3);
  
  return (
    <Layout pageTitle={`${category} Posts`}>
      <div className='container-fluid my-4 posts-page'>
        <h1 className="text-center">Latest {category} Posts</h1>
        <div className="row">
        {topCards}
        </div>
        <div className="text-center border my-3 py-3">
          <ArticleTopics />
        </div>
        <div className="row">
          {postCards}
        </div>
      </div>
    </Layout>
  );
};


export const query = graphql`
    query($name: String) {
      catagory: 
      allWpPost(
        sort: {date: DESC}
        filter: {categories: {nodes: {elemMatch: {name: {eq: $name}}}}}
      ) {
        nodes {
          id
          title
          slug
          featuredImage {
            node {
              altText
              gatsbyImage(placeholder: BLURRED, layout: CONSTRAINED, width: 400)
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
      
    }
  `;
  

  export function Head(){
    // TODO: Fix title and description
    return <Seo title="Latest Blog Posts" />;
  }
