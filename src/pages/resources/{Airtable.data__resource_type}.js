import * as React from "react";
import { graphql } from "gatsby";

import Layout from '../../layouts/layout/layout.js';
import ResourceList from '../../components/ResourceList/';
import PageHeading from '../../components/pageheading/page-heading.js';
import person1 from "../../assets/images/resources/resources-header-person-1.png";
import person2 from "../../assets/images/resources/resources-header-person-2.png";

export default function Component(props) {

  const pageInfo = {
    title: "LGBTQIA+ \n Resources",
    bgColor: "light-orange",
    person1: person1,
    person2: person2
  }  

  let resources = props.data.resources.nodes;
  console.log(resources);
  return (
  <Layout pageTitle={`${pageInfo.title} - Kiki for the Future`}>
    <PageHeading info={pageInfo}></PageHeading>
    <ResourceList resources={resources}></ResourceList>
  </Layout>
  );

}

export const query = graphql`
  query($data__resource_type: String) {
    resources: allAirtable(filter: {data: {resource_type: {eq: $data__resource_type}}}) {
      nodes {
        id
        data {
          resource_name
          resource_states
          resource_type
          resource_website
          resource_description
        }
      }
    }
  }`;