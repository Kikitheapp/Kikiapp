import * as React from "react";
import { graphql } from "gatsby";
import Layout from '../layouts/layout/layout.js';
import PageHeading from '../components/pageheading/page-heading.js';
import Accordion from '../components/accordion/accordion.js';

import person1 from "../assets/images/prep/prep-person-header-1.svg";
import person2 from "../assets/images/prep/prep-person-header-2.svg";

const pageInfo = {
  title: "Resources",
  bgColor: "peach-puff",
  person1: person1,
  person2: person2
}

function Resources (props) {

  let resources = props.data.allAirtable.edges;
  
  let resourceList = resources.map((resource, index) => {
    return (
      <Accordion title={resource.node.data.resource_name}>
        <p>{resource.node.data.resource_type}</p>
        <p>{resource.node.data.resource_states}</p>
      </Accordion>
    )
  });

  return (
    <div>
      <Layout pageTitle={`pageInfo.title - Kiki for the Future`}>
        <PageHeading info={pageInfo}></PageHeading>
        <div className="wrapper pb-5">
          {resourceList}
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
      allAirtable(filter: {table: {eq: "resources"}}) {
        edges {
          node {
            data {
              resource_name
              resource_states
              resource_type
            }
          }
        }
      }
    }`;

export default Resources;
