import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './article-feed.css';
import articleImage from '../../assets/images/kiki-splash.png';

import { useBlogUrl } from "../../hooks/use-blog-url";

/**
 * ArticleFeed component - get Kiki articles from Medium and display the three most recent.
 * 
 * @returns <ArticleFeed />
 **/
function ArticleFeed() {

  const blogUrl = useBlogUrl();

  const data = useStaticQuery(graphql`
    query GetPostPreviews {
      allWpPost(sort: {date: DESC}, limit: 3) {
        nodes {
          id
          title
          excerpt
          slug
          featuredImage {
            node {
              altText
              sourceUrl
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

  
  let articleCards = articles.map(buildArticleCard);

  function buildArticleCard(article){
    if(!article.featuredImage){
      article.featuredImage = {
        node: {
          altText: "Kiki for the Future",
          sourceUrl: `${articleImage}`
        }
      }
    }

    return (
      <div className="col-sm py-3" key={article.id}>

        <div className="card">
        <a href={`${blogUrl}/${article.slug}`} target="_blank" rel="noreferrer">
          <img src={article.featuredImage.node.sourceUrl} className="card-img-top" alt={article.featuredImage.node.altText} />
          <div className="card-body">
            <h4 className="card-title">{article.title}</h4>
          </div>
        </a>
        </div>
      </div>
    );
  }

  return (
    <div className="row p-4 bg-dark-orange text-center">
      <h4>Our latest Posts...</h4>
      <div className="row justify-content-center">
      {articleCards}
      </div>
    </div>
  );
}

export default ArticleFeed;
