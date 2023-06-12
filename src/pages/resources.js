import * as React from "react";
import { graphql } from "gatsby";
import Layout from '../layouts/layout/layout.js';
import PageHeading from '../components/pageheading/page-heading.js';
import ResourceList from '../components/ResourceList/ResourceList.js';

import person1 from "../assets/images/resources/resources-header-person-1.png";
import person2 from "../assets/images/resources/resources-header-person-2.png";


/**
 * Resources page
 * @param {Object} props.data - Resources data from DB 
 * @returns {React.Component} Resources page component
 **/
function Resources(props){

  const pageInfo = {
    title: "LGBTQIA+ Resources",
    bgColor: "light-orange",
    person1: person1,
    person2: person2
  }  

  // get resources, grouped by type
  const resources = props.data.resources.group;

  // resource types in order that they are displayed
  // TODO: Fix list order
  // TODO: Handle National resources
  // TODO: Add more states
  const resourceTypes = ['Housing', 'Legal', 'Health + Wellness', 'Queer Spaces'];


  function loadResources(event) {
    //setResourceType(event.target.value);
  }

  let list = resources.map((group, index) => {
    return <ResourceList resources={group.nodes} type={group.type} key={index} />
  });


  return (
    <div>
      <Layout pageTitle={`${pageInfo.title} - Kiki for the Future`}>
        <PageHeading info={pageInfo}></PageHeading>
        <div className="m-5">
          <div className="py-4 my-5 bg-primary text-center">
            <label className="form-label">Resources by Type: </label>
            <select className="text-center btn btn-outline-secondary ps-1" onClick={loadResources}>
              <option value="All">All</option>
              <option value="Housing">Housing</option>
              <option value="Legal">Legal</option>
              <option value="Health + Wellness">Health + Wellness</option>
              <option value="Queer Spaces">Queer Spaces</option>
            </select>
          </div>
          <h2>New York</h2>
          {list}
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
          id
          data {
            resource_name
            resource_description
            resource_website
            resource_national
          }
        }
      }
    }
  }`;

export default Resources;
