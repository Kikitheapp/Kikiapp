import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../layouts/mlayout/mlayout';
import SEO from '../../components/seo/seo';
import ArticleCard from '../../components/article-card/article-card';

export default function PostsPage(props) {
  
  const posts = props.data.allWpPost.nodes;

  let postCards = posts.map((post) => {
    return <ArticleCard key={post.id} post={post} />;
  });

  // ToDo: Style the post content

  return (
    <Layout pageTitle="Posts">
    <div>
      <h1>Latest Blog Posts</h1>
      {postCards}
    </div>
    </Layout>
  );
};

export function Head(){
  return <SEO title="Latest Blog Posts" />;
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
}`;
