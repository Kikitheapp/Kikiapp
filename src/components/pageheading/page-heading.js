import * as React from 'react';
import './page-heading.css';

/***
 * PageHeading
 * @param {object} info - Customize the page heading
 * */
function PageHeading({info}) {
  return (
      <div className="heading">
          <h2 className={"page-title text-center bg-"+info.bgColor}>{info.title}</h2>
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
      </div>
    )
}

export default PageHeading;
