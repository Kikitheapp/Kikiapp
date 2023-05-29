import * as React from 'react';
import './page-heading.css';

const PageHeading = (props) => {
  
  const info = props.info;
  const metadata = props.metadata;

  let heading = <h2 className={"page-title text-center bg-"+info.bgColor}></h2>;
  let subHeading;

  if(metadata) {
    if(metadata.title) {
      heading = <h2 className={"page-title text-center bg-"+info.bgColor}>{metadata.title}</h2>;
    }
    if(metadata.description) {
      subHeading = <h3 className="page-subtitle text-center pb-5">{metadata.description}</h3>;
    }
  }




  return (
      <div className="heading">
          {heading}
          <div className="heading-people row justify-content-center mb-5">
              <div className="heading-person-1 col-6 text-end">
                  <img src={info.person1} className="img-fluid"
                      alt='Person looking right.' />
              </div>
              <div className="heading-person-2 col-6">
                  <img src={info.person2} className="img-fluid"
                      alt="Person looking left."/>
              </div>
          </div>
          {subHeading}
      </div>
    )
}

export default PageHeading;
