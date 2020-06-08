import React from "react";

export default function Mailing(props) {
    return (
        <div className="mailinglist">
            <form><input className="email"placeholder="jwhite@gmail.com"></input></form>
            <button className="mailinglistbtn" href="test.html">join our mailing list</button>
            <div className="survey">
            <a href="www.google.com" target="_blank">Take our servey here</a>
        </div>
        </div>
    )
}