import React from 'react';
import { Link } from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';


function ArticleCard(props) {

  const post = props.post;

  let postImage;

  if(post.featuredImage) {
    postImage = <GatsbyImage image={getImage(post.featuredImage.node)} alt={post.title} />;
  } else {
    postImage = <h2 className="blog-card">{post.title}</h2>;
  }


  return <div key={post.id}>
    <Link to={post.slug}>{postImage}</Link>
  </div>
}

export default ArticleCard;
