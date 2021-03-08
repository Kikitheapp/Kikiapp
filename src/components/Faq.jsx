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
                <button id="headingTwo" className="btn" data-toggle="collapse" data-target="#question-one" aria-expanded="true" aria-controls="question-one">
                    Lorem ipsum dolor sit amet.
                </button>
                <div className="collapse" id="question-two" data-parent="#question-accordion" aria-labelledby="headingTwo">
                    Duis accumsan neque at volutpat bibendum. Cras eget purus eu ligula volutpat bibendum. Donec convallis justo ut arcu lobortis, sed commodo libero pulvinar.
                </div>
                <button id="headingThree" className="btn" data-toggle="collapse" data-target="#question-Three" aria-expanded="true" aria-controls="question-Three">
                    Lorem ipsum dolor sit amet.
                </button>
                <div className="collapse" id="question-Three" data-parent="#question-accordion" aria-labelledby="headingThree">
                    Duis accumsan neque at volutpat bibendum. Cras eget purus eu ligula volutpat bibendum. Donec convallis justo ut arcu lobortis, sed commodo libero pulvinar.
                </div>
                <button id="headingFour" className="btn" data-toggle="collapse" data-target="#question-Four" aria-expanded="true" aria-controls="question-Four">
                    Lorem ipsum dolor sit amet.
                </button>
                <div className="collapse" id="question-Four" data-parent="#question-accordion" aria-labelledby="headingFour">
                    Duis accumsan neque at volutpat bibendum. Cras eget purus eu ligula volutpat bibendum. Donec convallis justo ut arcu lobortis, sed commodo libero pulvinar.
                </div>
            </div>
        </div>
         
     
    )
}

export default AboutUs;
