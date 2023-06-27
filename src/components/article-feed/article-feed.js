import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
//import './article-feed.css';

/**
 * ArticleFeed component - get Kiki articles from Medium and display the three most recent.
 * 
 * @returns <ArticleFeed />
 **/
function ArticleFeed() {

  const data = useStaticQuery(graphql`
    query MyQuery {
      allMediumPost(limit: 3, sort: {latestPublishedAt: DESC}) {
        edges {
          node {
            id
            title
            latestPublishedAt
            uniqueSlug
            virtuals {
              subtitle
              previewImage {
                imageId
              }
            }
          }
        }
      }
    }
  `);

  console.log(data);


  return (
    <div className="article-feed">
      <h1>Our latest posts...</h1>
    </div>
  );
}

export default ArticleFeed;
