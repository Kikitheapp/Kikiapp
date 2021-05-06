import React from "react";
import benchpeople from "../assets/images/undraw_couplekiki.svg";

export default function Graphic() {
    return (
        <div className="row align-items-center px-5 pb-5">
            <div className="col-md-6 text-center text-md-left"> 
                <h2 className="slogan">Get a fresh take on what you didn&apos;t learn in sex-ed.</h2>
                <a href="./form.html">
                    <button className="mailinglistbtn">Join our mailing list</button>
                </a>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={benchpeople} alt="people on a bench"></img>
            </div>
        </div>
    )
}