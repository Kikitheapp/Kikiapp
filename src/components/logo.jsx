import React from "react";
import Kikilogo from "../assets/images/kikilogo1.png"
export default function Logo(props) {
    return (
        <div className="logo">
            <img className="logo" src={Kikilogo} alt="logo"></img>
        </div>
    )
}