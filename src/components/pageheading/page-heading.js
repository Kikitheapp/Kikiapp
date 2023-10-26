import * as React from 'react';
import './page-heading.css';

/***
 * PageHeading
 * @param {object} info - Customize the page heading
 * */
function PageHeading(props) {
  
  const info = props.info;
  const metadata = props.metadata;

  let heading = '';
  let subHeading;

  if(metadata) {
    if(metadata.title) {
      heading = <h2 className={"page-title text-center bg-"+info.bgColor}>{metadata.title}</h2>;
    }
    if(metadata.description) {
      subHeading = <h3 className="page-subtitle text-center pb-4">{metadata.description}</h3>;
    }
  }

  let person1 = '';
  let person1alt = 'Person looking right.';
  
  if(typeof info.person1 === 'object'){
    person1 = info.person1.img;
    person1alt = info.person1.alt;
  } else {
    person1 = info.person1;
  }

  
  let person2 = '';
  let person2alt = 'Person looking left.';
  if(typeof info.person2 === 'object'){
    person2 = info.person2.img;
    person2alt = info.person2.alt;
  } else {
    person2 = info.person2;
  }

  

  return (
      <div className="heading">
          {heading}
          <div className="heading-people d-flex justify-content-center align-items-end mb-5">
              <img src={person1} className="img-fluid"
                  alt={person1alt} />
              <img src={person2} className="img-fluid"
                  alt={person2alt} />
          </div>
          {subHeading}
      </div>
    )
}

export default PageHeading;
