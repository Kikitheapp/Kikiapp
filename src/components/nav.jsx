import React from "react";
import Logo from "./logo"


export default function Navbar(props) {
    return (
        <div className="navbar">
            <Logo>{Logo}</Logo>
            <ul>

                <li>
                    <a href="https://medium.com/@kikiapp">
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