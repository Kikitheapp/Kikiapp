import * as React from "react";
import { graphql} from "gatsby";
import RLayout from '../../layouts/rlayout/rlayout.js';
import ResourceList from '../../components/ResourceList/ResourceList.js';
import ResourceSelect from '../../components/ResourceSelect/ResourceSelect.js';
import SEO from '../../components/seo/seo.js';

import person1 from "../../assets/images/resources/resources-header-person-1.png";
import person2 from "../../assets/images/resources/resources-header-person-2.png";

const pageMetadata = {
  title: "LGBTQIA+ Resources",
  desription: "Find IRL LGBTQIA+ resources in NYC and beyond."
}

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
  const stateResources = props.data.state.group;
  const nationalResources = props.data.national.group;

  let stateList = {};
  stateResources.forEach((group, index) => {
    stateList[group.type] = <ResourceList resources={group.nodes} type={group.type} key={index} />;
  });

  let nationalList = {};
  nationalResources.forEach((group, index) => {
    nationalList[group.type] = <ResourceList resources={group.nodes} type={group.type} key={index} />;
  });


  return (
      <RLayout pageTitle={`${pageInfo.title} - Kiki for the Future`}>
        <ResourceSelect currentType='All'></ResourceSelect>
        <div className="container">
          <div className="my-5">
            <h2>New York</h2>
            {stateList['Housing']}
            {stateList['Legal']}
            {stateList['Health + Wellness']}
            {stateList['Queer Spaces']}
          </div>
          <div className="my-5">
            <h2>National</h2>
            {nationalList['Housing']}
            {nationalList['Legal']}
            {nationalList['Health + Wellness']}
            {nationalList['Queer Spaces']}
          </div>
        </div>
      </RLayout>
  )
}

export const query = graphql`
  query {
    state: allAirtableResources(filter: {data: {resource_national: {eq: null}, resource_states: {elemMatch: {data: {state_abreviation: {eq: "NY"}}}}}}) {
      group(field: {data: {resource_type: SELECT}}) {
        type: fieldValue
        nodes {
          id
          data {
            resource_name
            resource_description
            resource_website
            resource_national
            resource_states {
              data {
                state_abreviation
                state_fullname
              }
            }
          }
        }
      }
    }
    national: allAirtableResources(filter: {data: {resource_national: {eq: true}}}) {
      group(field: {data: {resource_type: SELECT}}) {
        type: fieldValue
        nodes {
          id
          data {
            resource_name
            resource_description
            resource_website
            resource_national
            resource_states {
              data {
                state_abreviation
                state_fullname
              }
            }
          }
        }
      }
    }
  }`;

export default Resources;

export function Head(){
  return <SEO title={pageMetadata.title} />
}
