import React from 'react';
import Heading from './Heading'
import person1 from "../assets/images/prep-person-1.svg";
import person2 from "../assets/images/prep-person-2.svg";

const SexToys = () => {
    const pageInfo = {
        title: 'Meet The Sex Toys',
        bgColor: 'light-orange',
        person1: person1,
        person2: person2
    }

    return (
        <div>
            <Heading info={pageInfo}></Heading>
        </div>
        )
}

export default SexToys;