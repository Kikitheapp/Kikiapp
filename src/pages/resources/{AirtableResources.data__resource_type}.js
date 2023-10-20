import * as React from "react";
import { graphql } from "gatsby";

import RLayout from '../../layouts/rlayout/rlayout.js';
import ResourceList from '../../components/ResourceList/ResourceList.js';
import ResourceSelect from '../../components/ResourceSelect/ResourceSelect.js';
import Seo from '../../components/seo/seo.js';

import person1 from "../../assets/images/resources/resources-header-person-1.png";
import person2 from "../../assets/images/resources/resources-header-person-2.png";

const pageMetadata = {
  title: "LGBTQIA+ Resources"
}

export default function Component(props) {

  const type = props.pageContext.data__resource_type;

  const pageInfo = {
    title: "LGBTQIA+ \n Resources",
    bgColor: "light-orange",
    person1: person1,
    person2: person2
  }  

  let stateResources = props.data.state.nodes;

  let stateResourcesBlock = '';

  if(Array.isArray(stateResources) && stateResources.length !== 0) {
    stateResourcesBlock =         <><h2>New York</h2>
    <ResourceList resources={stateResources} type={type}></ResourceList></>;
  }



  let nationalResources = props.data.national.nodes;

  let nationalResourcesBlock = '';

  if(Array.isArray(nationalResources) && nationalResources.length !== 0) {
    nationalResourcesBlock = <><h2>National</h2>
    <ResourceList resources={nationalResources} type={type}></ResourceList></>;
  }


  return (
    <RLayout pageTitle={`${pageInfo.title} - Kiki for the Future`}>
      <ResourceSelect currentType={type}></ResourceSelect>
      <div className="container my-5">
        {stateResourcesBlock}
        {nationalResourcesBlock}
      </div>
    </RLayout>
  );

}

export const query = graphql`
  query($data__resource_type: String) {
    state: allAirtableResources(
      filter: {data: {resource_national: {eq: null}, resource_states: {elemMatch: {data: {state_abreviation: {eq: "NY"}}}} resource_type: {eq: $data__resource_type}}}
    ) {
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
    national: allAirtableResources(filter: {data: {resource_national: {eq: true}, resource_type: {eq: $data__resource_type}}}) {
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
  }`;

export function Head(){
    return <Seo title={pageMetadata.title} />
}
