import * as React from "react";
import { graphql } from "gatsby";

export default function Component(props) {
  let data = props.data;
  console.log(props.data);
  return <div>Resources -
  
  </div>

}

export const query = graphql`
  query($data__resource_type: String) {
    resources: allAirtable(filter: {data: {resource_type: {eq: $data__resource_type}}}) {
      nodes {
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