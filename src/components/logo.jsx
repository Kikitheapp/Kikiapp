import React from 'react'
import Kikilogo from '../assets/images/kikilogo1.png'
import { Link } from 'react-router-dom'
export default function Logo(props) {
  return (
    <div className='logo'>
      <Link to='/'>
        <img className='logo' src={Kikilogo} alt='logo'></img>
      </Link>
    </div>
  )
}
