import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../layouts/mlayout/mlayout';
import SEO from '../../components/seo/seo';
import ArticleCard from '../../components/article-card/article-card';
import ArticleTopics from '../../components/article-topics/article-topics';

import './index.css';

export default function PostsPage(props) {
  
  const posts = props.data.allWpPost.nodes;

  let postCards = posts.map((post) => {
    return <div className='col-md-4 my-1' key={post.id}><ArticleCard post={post} /></div>;
  });



  let topCards = postCards.splice(0, 3);

  return (
    <Layout pageTitle='Posts'>
    <div className='container-fluid my-4 posts-page'>
      <h1 className='text-center'>Latest Blog Posts</h1>
      <div className='row'>
        {topCards}
      </div>
      <div className='text-center border my-3 py-3'>
        <ArticleTopics />
      </div>
      <div className='row'>
        {postCards}
      </div>
    </div>
    </Layout>
  );
};

export function Head(){
  return <SEO title='Latest Blog Posts' />;
}

export const query = graphql` 
query GetPostFeed {
  allWpPost(sort: {date: DESC}) {
    nodes {
      id
      title
      slug
      featuredImage {
        node {
          altText
          gatsbyImage(placeholder: BLURRED, layout: CONSTRAINED, width: 600)
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
  }
  allWpCategory(filter: { slug: {ne: "uncategorized"}}) {
    nodes {
      id
      name
      slug
      count
    }
  }
}`;
