import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../../layouts/layout/layout';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

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
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (data && data.allWpPost) {
      setPosts(data.allWpPost.nodes);
      console.log(data);
    }
    
  }, [data]);


  console.log(posts);

  return (
    <Layout pageTitle="Posts">
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
    </Layout>
  );
};

export default PostsPage;
