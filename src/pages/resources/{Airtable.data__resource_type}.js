import * as React from "react";
import { graphql } from "gatsby";

import Layout from '../../layouts/layout/layout.js';
import ResourceList from '../../components/ResourceList/ResourceList.js';
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
  let type = props.pageContext.data__resource_type;

  // TODO: Handle null case

  return (
  <Layout pageTitle={`${pageInfo.title} - Kiki for the Future`}>
    <PageHeading info={pageInfo}></PageHeading>
    <ResourceList resources={resources} type={type}></ResourceList>
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
          resource_description
          resource_website
          resource_national
        }
      }
    }
  }`;