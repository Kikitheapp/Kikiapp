import * as React from "react";
import { graphql} from "gatsby";
import RLayout from '../../layouts/rlayout/rlayout.js';
import ResourceList from '../../components/ResourceList/ResourceList.js';
import ResourceSelect from '../../components/ResourceSelect/ResourceSelect.js';

import person1 from "../../assets/images/resources/resources-header-person-1.png";
import person2 from "../../assets/images/resources/resources-header-person-2.png";


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

  // const pageMetadata = {
  //   title: "LGBTQIA+ Resources"
  // }

  // get resources, grouped by type
  const resources = props.data.resources.group;

  // TODO: Handle National resources
  
  // const resourceTypes = ['Housing', 'Legal', 'Health + Wellness', 'Queer Spaces'];


  let list = {};
  resources.forEach((group, index) => {
    list[group.type] = <ResourceList resources={group.nodes} type={group.type} key={index} />;
  });

  return (
      <RLayout pageTitle={`${pageInfo.title} - Kiki for the Future`}>
        <ResourceSelect currentType='All'></ResourceSelect>
        <div className="container">
          <div className="my-5">
          <h2>New York</h2>
          {list['Housing']}
          {list['Legal']}
          {list['Health + Wellness']}
          {list['Queer Spaces']}
          </div>
        </div>
      </RLayout>
  )
}

export const query = graphql`
  query {
    resources: allAirtableResources {
      group(field: {data: {resource_type: SELECT}}) {
        type: fieldValue
        nodes {
          index: rowIndex
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
