import React from "react";

const AboutUs = () => {
    return (
        <div className="container-fluid" id="question-accordion">
            <div className="accordion">
                <button id="headingOne" className="btn" data-toggle="collapse" data-target="#question-one" aria-expanded="true" aria-controls="question-one">
                    Lorem ipsum dolor sit amet.
                </button>
                <div className="collapse" id="question-one" data-parent="#question-accordion" aria-labelledby="headingOne">
                    Duis accumsan neque at volutpat bibendum. Cras eget purus eu ligula volutpat bibendum. Donec convallis justo ut arcu lobortis, sed commodo libero pulvinar.
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
