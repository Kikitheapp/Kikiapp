import React from "react";
import benchpeople from "../assets/images/benchpeople.jpg"

export default function Graphic( props) {
    return (
        <div className="graphic">
        <img className="graphic" src={benchpeople} alt="people on a bench"></img>
        </div>
    )
}