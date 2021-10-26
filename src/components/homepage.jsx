import React from "react";
import HomePerson1 from "../assets/images/home-person-1.svg";
import HomePerson2 from "../assets/images/home-person-2.svg";
import BackgroundVector from "../assets/images/background-vector.svg";
import { Link } from 'react-router-dom'

export default function homepage() {
    return (
    <div>
    <div className="bg-placeholder" style={{backgroundImage: `url(${BackgroundVector})` }}></div>
        <div className="row align-items-center px-5 pb-5">
            <div className="col-md-6 text-center text-md-left pl-md-5"> 
                <h2>Get a fresh take on what you didn&apos;t learn in sex-ed.</h2>
                <Link className='nav-link' to='/MailinglistForm'>
                <a className="pl-lg-5">
                    <button className="mailinglistbtn">Join our mailing list</button>  </a>
                    </Link>
            </div>
            <div className="col-md-6 home-people">
                <div className="row pr-md-5">
                    <div className="col-6 home-person-1">
                        <img className="img-fluid" src={HomePerson1} alt="Person standing with lab coat and a bun." />
                    </div>
                    <div className="col-6 home-person-2">
                        <img className ="img-fluid" src={HomePerson2} alt="Person with blue pants and jacket sitting on a cube." />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}