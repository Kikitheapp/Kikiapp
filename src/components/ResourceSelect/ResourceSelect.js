import * as React from 'react';
import { navigate } from 'gatsby';


/***
 * ResourceSelect component - select button for the resources page
 * 
 * @returns {React.Component} Component for selecting resource type
 ***/
function ResourceSelect({currentType}) {

  function loadResources(event) {
    navigate(`/resources/${event.target.value}`);
  }

  const types =  ['Housing', 'Legal', 'Health + Wellness', 'Queer Spaces'];
  const typeSlugs = ['housing', 'legal', 'health-wellness', 'queer-spaces'];

  let thisTypeSlug = typeSlugs[types.indexOf(currentType)];

  let typeOptions = types.map((type, index) => {
    let isSelected = type === currentType ? 'selected' : '';
    return <option value={typeSlugs[index]} key={index} selected={ isSelected } >{type}</option>
  });

  return (
    <div className="container-fluid">
      <div className="py-3 bg-primary text-center">
        <h5 className="fs-4">Browse Resources</h5>
        <label className="m-3 .fs-5" htmlFor="select-type">Type: </label>
        <select id="select-type" className="text-center btn btn-secondary" onChange={loadResources} value={thisTypeSlug}>
          <option value="">All</option>
          <option value='housing'>Housing</option>
          <option value='legal'>Legal</option>
          <option value='health-wellness'>Health + Wellness</option>
          <option value='queer-spaces'>Queer Spaces</option>
        </select>
      </div>
    </div>
  );


}

export default ResourceSelect;