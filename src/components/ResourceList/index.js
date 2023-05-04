import * as React from 'react';

/***
 * ResoruceList
 * 
 ***/
function ResourceList({resources}) {

    // TODO: Refactor resource sections into component


    // create a list of resources for this type
    let resourceList = resources.nodes.map((resource, index) => {
      return (
        <div className="resource ms-5" key={resource.id}>
          <h4>{resource.data.resource_name}</h4>
          <p>{resource.data.resource_description}<br />
          Website: <a href={resource.data.resource_website}>{resource.data.resource_website}</a></p>
        </div>
      )
    });

    // create a section for this resource type and add the list of resources
    let block = <div className="ms-5" key={resources.type}>
    <h3>{resources.type}</h3>
      {resourceList}
    </div>;

    return block;

}

export default ResourceList;