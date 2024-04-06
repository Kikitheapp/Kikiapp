import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../../layouts/mlayout/mlayout';
import SEO from '../../components/seo/seo';
import ArticleCard from '../../components/article-card/article-card';

import './index.css';

export default function PostsPage(props) {
  
  const posts = props.data.allWpPost.nodes;
  const categories = props.data.allWpCategory.nodes;
  
  const topics = [
    {
      name: 'All',
      slug: ''
    },
    {
      name: 'Queer Sex Ed 101',
      slug: 'queer-sex-ed-101'
    },
    {
      name: 'Sexual Pleasure',
      slug: 'sexual-pleasure'
    },
    {
      name: 'Relationships and Consent',
      slug: 'relationships-and-consent'
    },
    {
      name: 'Gender and Queerness',
      slug: 'gender-and-queerness'
    },
    {
      name: 'Queer Joy and Wellness',
      slug: 'queer-joy-and-wellness'
    }
  ]

  console.log(categories);

  let postCards = posts.map((post) => {
    return <div className='col-md my-1' key={post.id}><ArticleCard post={post} /></div>;
  });

  let categoryList = topics.map((category, index) => {
    return <div key={index}><Link to={`/posts/${category.slug}`}>{category.name}</Link></div>;
  });

  let topCards = postCards.splice(0, 3);

  return (
    <Layout pageTitle='Posts'>
    <div className='container-fluid my-4 posts-page'>
      <h1 className='text-center'>Latest Blog Posts</h1>
      <div className='row'>
        {topCards}
      </div>
      <div className='text-center border'>
        <h2>Topics</h2>
        {categoryList}
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
  allWpCategory(filter: { slug: {ne: "uncategorized"}}) {
    nodes {
      id
      name
      slug
      count
    }
  }
}`;
