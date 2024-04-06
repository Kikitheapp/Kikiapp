import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../layouts/mlayout/mlayout';
import SEO from '../../components/seo/seo';
import ArticleCard from '../../components/article-card/article-card';

export default function Component(props) {

  const catagory = props.pageContext.name;

  const posts = props.data.catagory.nodes;

  let postCards = posts.map((post) => {
    return <div className="col" key={post.id}><ArticleCard post={post} /></div>;
  });
  
  return (
    <Layout pageTitle="Posts">
      <div>
        <h1 className="text-center">Latest Blog Posts</h1>
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
    return <SEO title="Posts" />;
  }
