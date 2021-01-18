import React from "react";


export default function Navbar(props) {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@kikiapp">
                        <p>Visit our blog</p></a>
                </li>
                <li>
                    <a href="./aboutus.html" >
                        <p>About us</p></a>
                </li>
            </ul>
        </div>
    )
}