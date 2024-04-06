import React from 'react';
import { Link } from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import './article-card.css';


function ArticleCard(props) {

  const post = props.post;

  let postImage;

  if(post.featuredImage) {
    console.log(post.featuredImage);
    postImage = <GatsbyImage className="blog-title" image={getImage(post.featuredImage.node)} alt={post.title} />;
  } else {
    postImage = <h3 className="blog-title">{post.title}</h3>;
  }


  return <div key={post.id} className='blog-card' >
    <Link to={`posts/${post.slug}`} >{postImage}</Link>
  </div>
}

export default ArticleCard;
