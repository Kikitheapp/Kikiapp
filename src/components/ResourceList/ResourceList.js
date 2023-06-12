import * as React from 'react';

/***
 * ResoruceList component - creates a list of resources with a heading type
 * @param array resources - list of resources
 * @param string type - type of resource
 * @returns {React.Component} ResourceList component
 ***/
function ResourceList({resources, type}) {

    // create a list of resources for this type
    let resourceList = resources.map((resource) => {
      return (
        <div className="resource ms-5" key={resource.id}>
          <h4>{resource.data.resource_name}</h4>
          <p>{resource.data.resource_description}<br />
          Website: <a href={resource.data.resource_website}>{resource.data.resource_website}</a></p>
        </div>
      )
    });

    // create a section for this resource type and add the list of resources
    let block = <div className="ms-5" key={type}>
    <h3>{type}</h3>
      {resourceList}
    </div>;

    return block;

}

export default ResourceList;