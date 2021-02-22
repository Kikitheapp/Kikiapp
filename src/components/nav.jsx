import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://medium.com/@kikiapp'
          >
            <p>Visit our blog</p>
          </a>
        </li>
        <li>
          <Link to='/aboutUs'>
            <p>About us</p>
          </Link>
          </li>
          <li>
          <Link to='/PrEP-info'> 
          <p>PrEP info</p></Link>
          </li>
          <li>
          <Link to='/MailinglistForm'>
          <p>Join Our Mailing List</p></Link> 
        </li>
      </ul>
    </div>
  )
}
