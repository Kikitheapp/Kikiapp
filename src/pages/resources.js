import * as React from "react";
import { graphql } from "gatsby";
import Layout from '../layouts/layout/layout.js';
import PageHeading from '../components/pageheading/page-heading.js';

import person1 from "../assets/images/resources/resources-header-person-1.png";
import person2 from "../assets/images/resources/resources-header-person-2.png";

const pageInfo = {
  title: "Resources",
  bgColor: "light-orange",
  person1: person1,
  person2: person2
}

/**
 * Resources page
 * @param {Object} props.data - Resources data from DB 
 * @returns {React.Component} Resources page component
 **/
function Resources(props){

  // get resources, grouped by type
  const resources = props.data.resources.group;

  // resource types in order that they are displayed
  const resourceTypes = ['Housing', 'Legal', 'Health + Wellness', 'Queer Spaces'];

  // loop through the resource types and build the sections for the resource lists
  let resourceDivs = [];
  resources.forEach((group) => {

    // create a list of resources for this type
    let resourceList = group.nodes.map((resource, index) => {
      return (
        <div className="resource ms-5" key={resource.id}>
          <h4>{resource.data.resource_name}</h4>
          <p>{resource.data.resource_description}<br />
          Website: <a href={resource.data.resource_website}>{resource.data.resource_website}</a></p>
        </div>
      )
    });

    // create a section for this resource type and add the list of resources
    let block = <div className="ms-5" key={group.type}>
    <h3>{group.type}</h3>
      {resourceList}
    </div>;

    // add this section to the list of resource sections that will be rendered,
    // in the order that they are displayed
    resourceDivs[resourceTypes.indexOf(group.type)] = block;

  });

  // TODO: Refactor resource sections into component
  // TODO: Add filter by catagory (using dropdown, one catagory at a time)
  
  return (
    <div>
      <Layout pageTitle={`${pageInfo.title} - Kiki for the Future`}>
        <PageHeading info={pageInfo}></PageHeading>
        <div className="container pb-5">
          <h2>New York</h2>
          {resourceDivs}
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    resources: allAirtable(filter: {table: {eq: "resources"}}) {
      group(field: data___resource_type) {
        type: fieldValue
        nodes {
          data {
            resource_name
            resource_website
            resource_description
          }
          id
        }
      }
    }
  }`;

export default Resources;
