import React from "react";
import person1 from "../assets/images/faq-person-1.svg";
import person2 from "../assets/images/faq-person-2.svg";
const FAQ = () => {
    return (
        <div className="FAQtext margin-alot" id="question-accordion">
            <h2 className="text-center bg-secondary">FAQ</h2>
            <div className="faq-people row justify-content-center">
                <div className="faq-person-1  col-6 text-right">
                    <img src={person2} className="img-fluid"
                        alt="Person with white shirt and blue skirt walking to meet person
                    on right." />
                </div>
                <div className="faq-person-2  col-6">
                    <img src={person1} className="img-fluid"
                        alt="Person with orange jacket and blue jeans walking to meet person 
                    on left."/>
                </div>
            </div>
            <div className="accordion my-5">
                <div className="row justify-content-center py-3">
                    <div className="col-md-8  col-lg-6">
                        <div className="row align-items-center ">
                            <div className="col-auto">
                                <i className="bi bi-plus"></i>
                            </div>
                            <div className="col">
                                <h3 id="heading-one" data-toggle="collapse" data-target="#question-one"
                                    aria-expanded="true" aria-controls="question-one">
                                    STIs/STDs, Testing, and Barriers
                                </h3>
                            </div>
                            <div className="collapse" id="question-one" data-parent="#question-accordion"
                                aria-labelledby="heading-one">
                                Duis accumsan neque at volutpat bibendum. Cras eget purus eu ligula volutpat bibendum. Donec
                                convallis justo ut arcu lobortis, sed commodo libero pulvinar.
                        </div>

                        </div>
                    </div>
                </div>
                <div className="row justify-content-center py-3">
                    <div className="col-md-8  col-lg-6">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <i className="bi bi-plus"></i>
                            </div>
                            <div className="col">
                                <h3 id="heading-two" data-toggle="collapse" data-target="#question-two"
                                    aria-expanded="true" aria-controls="question-two">
                                    Sexual Pleasure
                            </h3>
                            </div>
                        </div>
                        <div className="collapse" id="question-two" data-parent="#question-accordion"
                            aria-labelledby="heading-two">
                            Maecenas bibendum turpis vehicula, sollicitudin magna ac, tristique ante. Quisque dolor
                            eros, mollis nec tincidunt id, suscipit nec quam. Vestibulum urna tellus, mattis vitae urna
                            sed, molestie tempor diam.

                        </div>
                    </div>
                </div>
                <div className="row justify-content-center py-3">
                    <div className="col-md-8  col-lg-6">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <i className="bi bi-plus"></i>
                            </div>
                            <div className="col">
                                <h3 id="heading-three" data-toggle="collapse" data-target="#question-three"
                                    aria-expanded="true" aria-controls="question-three">
                                    Gender and Identity
                                </h3>
                            </div>
                        </div>
                        <div className="collapse" id="question-three" data-parent="#question-accordion"
                            aria-labelledby="heading-three">
                            Quisque sed erat luctus, dapibus purus ut, imperdiet tortor. Cras sit amet ex lacinia augue
                            tincidunt dictum.
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center py-3">
                    <div className="col-md-8  col-lg-6">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <i className="bi bi-plus"></i>
                            </div>
                            <div className="col">
                                <h3 id="heading-four" data-toggle="collapse" data-target="#question-four"
                                    aria-expanded="true" aria-controls="question-four">
                                    Reproductive Health
                        </h3>
                            </div>
                            <div className="collapse" id="question-four" data-parent="#question-accordion"
                                aria-labelledby="heading-four">
                                Duis accumsan neque at volutpat bibendum. Cras eget purus eu ligula volutpat bibendum. Donec
                                convallis justo ut arcu lobortis, sed commodo libero pulvinar.
                        </div>

                        </div>
                    </div>
                </div>
                <div className="row justify-content-center py-3">
                    <div className="col-md-8  col-lg-6">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <i className="bi bi-plus"></i>
                            </div>
                            <div className="col">
                                <h3 id="heading-five" data-toggle="collapse" data-target="#question-five"
                                    aria-expanded="true" aria-controls="question-five">
                                    Relationships and Consent
                        </h3>
                            </div>
                        </div>
                        <div className="collapse" id="question-five" data-parent="#question-accordion"
                            aria-labelledby="heading-five">
                            Aenean a leo tincidunt, tempor nisl ut, gravida erat. Aenean dictum posuere felis laoreet
                            aliquet. Sed placerat laoreet ullamcorper.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;