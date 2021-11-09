import React from 'react';

const Heading = (props) => {
    return (
        <div>
            <h2 className={"page-title text-center bg-"+props.info.bgColor}>{props.info.title}</h2>
            <div className="heading-people row justify-content-center mb-5">
                <div className="heading-person-1 col-6 text-right">
                    <img src={props.info.person1} className="img-fluid"
                        alt="Person with white shirt and blue skirt walking to meet person
                    on right." />
                </div>
                <div className="heading-person-2 col-6">
                    <img src={props.info.person2} className="img-fluid"
                        alt="Person with orange jacket and blue jeans walking to meet person 
                    on left."/>
                </div>
            </div>
        </div>
        )
}

export default Heading;