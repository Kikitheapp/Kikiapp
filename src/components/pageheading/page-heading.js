import * as React from 'react';
import './page-heading.css';

/***
 * PageHeading
 * @param {object} info - Customize the page heading
 * */
function PageHeading(props) {
  
  const info = props.info;
  const metadata = props.metadata;

  let heading = <h2 className={"page-title text-center bg-"+info.bgColor}></h2>;
  let subHeading;

  if(metadata) {
    if(metadata.title) {
      heading = <h2 className={"page-title text-center bg-"+info.bgColor}>{metadata.title}</h2>;
    }
    if(metadata.description) {
      subHeading = <h3 className="page-subtitle text-center pb-4">{metadata.description}</h3>;
    }
  }

  return (
      <div className="heading">
          {heading}
          <div className="heading-people d-flex justify-content-center align-items-end mb-5">
              <img src={info.person1} className="img-fluid"
                  alt='Person looking right.' />
              <img src={info.person2} className="img-fluid"
                  alt="Person looking left."/>
          </div>
          {subHeading}
      </div>
    )
}

export default PageHeading;
