import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './article-feed.css';

import ArticleCard from '../article-card/article-card';


/**
 * ArticleFeed component - get Kiki articles from Medium and display the three most recent.
 * 
 * @returns <ArticleFeed />
 **/
function ArticleFeed() {

  const data = useStaticQuery(graphql`
    query GetPostPreviews {
      allWpPost(sort: {date: DESC}, limit: 3) {
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
        }
      }
    }
  `);

  const [articles, setArticles] = useState([]);

    useEffect(() => {

    try {

      setArticles(data.allWpPost.nodes);

    } catch (error) {

    } 

  }, [data]);

  let postCards = articles.map((post) => {
    return <div className='col-md-4' key={post.id}><ArticleCard className='post' post={post} /></div>;
  });

  return (
    <div className="container-fluid p-4 bg-dark-orange text-center article-feed">
      <h4>Our latest Posts...</h4>
      <div className="row">
        {postCards}
      </div>
    </div>
  );
}

export default ArticleFeed;
