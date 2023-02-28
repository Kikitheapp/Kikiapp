import * as React from 'react';
import './page-heading.css';

const PageHeading = (props) => {
  return (
      <div className="heading">
          <h2 className={"page-title text-center bg-"+props.info.bgColor}>{props.info.title}</h2>
          <div className="heading-people row justify-content-center mb-5">
              <div className="heading-person-1 col-6 text-end">
                  <img src={props.info.person1} className="img-fluid"
                      alt='Person looking right.' />
              </div>
              <div className="heading-person-2 col-6">
                  <img src={props.info.person2} className="img-fluid"
                      alt="Person looking left."/>
              </div>
          </div>
      </div>
    )
}

export default PageHeading;
