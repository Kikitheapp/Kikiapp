import React from 'react';
import { Link } from 'gatsby';

export default function ArticleTopics() {
  
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
  ];

  let categoryList = topics.map((category, index) => {
    return <div key={index}><Link to={`/posts/${category.slug}`}>{category.name}</Link></div>;
  });

  return (
    // Your JSX code goes here
    <div className="topics">
      <h2>Topics</h2>
      {categoryList}
    </div>
  );
};
