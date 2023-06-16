import * as React from "react";
import { graphql } from "gatsby";

import RLayout from '../../layouts/rlayout/rlayout.js';
import ResourceList from '../../components/ResourceList/ResourceList.js';
import ResourceSelect from '../../components/ResourceSelect/ResourceSelect.js';

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


    // TODO: Handle National resources

  return (
    <RLayout pageTitle={`${pageInfo.title} - Kiki for the Future`}>
      <ResourceSelect currentType={type}></ResourceSelect>
      <div className="container my-5">
        <h2>New York</h2>
        <ResourceList resources={resources} type={type}></ResourceList>
      </div>
    </RLayout>
  );

}

export const query = graphql`
  query($data__resource_type: String) {
      resources: allAirtableResources(filter: {data: {resource_type: {eq: $data__resource_type}}}) {
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
  }`;