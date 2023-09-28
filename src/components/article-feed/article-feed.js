import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './article-feed.css';

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

  let articles;
  let articleCards;
  try {
    articles = data.allMediumPost.edges;
    articleCards = articles.map(buildArticleCard);

  } catch (error) {
    console.error(error);
  } 

  

  function buildArticleCard(article){
    return (
      <div className="col-md" key={article.node.id}>

        <div className="card">
        <a href={`https://medium.com/kiki-magazine/${article.node.uniqueSlug}`} target="_blank" rel="noreferrer">
          <img className="card-img-top" src={`https://miro.medium.com/max/1000/${article.node.virtuals.previewImage.imageId}`} alt={article.node.title} />
          <div className="card-body">
            <h4 className="card-title">{article.node.title}</h4>
          </div>
        </a>
        </div>
      </div>
    );
  }

  return (
    <div className="row gy-3 justify-content-center p-5 bg-dark-orange text-center">
      {articleCards}
    </div>
  );
}

export default ArticleFeed;
