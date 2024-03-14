import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';

import Layout from '../../layouts/layout/layout';

export default function Component(props) {
  //const [posts, setPosts] = useState([]);

  console.log(props);

  const catagory = props.pageContext.name;

  const posts = props.data.catagory.nodes;

  

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

export const query = graphql`
    query($name: String) {
      catagory: 
      allWpPost(
        sort: {date: DESC}
        filter: {categories: {nodes: {elemMatch: {name: {eq: $name}}}}}
      ) {
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
  `;
