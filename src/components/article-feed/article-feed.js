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
  try {
    articles = data.allMediumPost.edges;
  } catch (error) {
    console.error(error);
  } 

  
  let articleFeed = '';
  if(articles && articles.length > 0){
    // build article cards

    let articleCards = articles.map(buildArticleCard);

    articleFeed = <div className="row justify-content-center p-5 article-feed bg-dark-orange text-center"><div className="row"><h2>Our latest posts...</h2></div><div className="row">{articleCards}</div></div>;
  }

  function buildArticleCard(article){
    return (
      <div className="col-8 my-3 col-lg-4" key={article.node.id}>
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
    <>
    {articleFeed}
    </>
  );
}

export default ArticleFeed;
