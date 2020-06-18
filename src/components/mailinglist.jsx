import React from "react";

export default function Mailing(props) {
    return (
        <div className="mailinglist">
            <p className="slogan">Get a fresh take on what you didn't learn in sex-ed.</p>
            <form><input className="emailinput"placeholder="jwhite@gmail.com"></input></form>
            <button className="mailinglistbtn" href="test.html">join our mailing list</button>
            <div className="survey">
            <a className="quizlink" href="www.google.com" target="_blank">or take this short quiz</a>
        </div>
        </div>
    )
}