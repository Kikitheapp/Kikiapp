import * as React from 'react';
import './theme-switcher.css';

export default function ThemeSwitcher() {
  return (
    <div className='d-flex justify-content-end'>
      <select
        className='theme-switcher'
        onChange={() => {

            document.getElementsByTagName('body')[0].classList.toggle('dark-mode');
            let navbar = document.getElementById('navbar');
            navbar.classList.toggle('navbar-light');
            navbar.classList.toggle('navbar-dark');

        }}
      >
        <option value='light-mode'>Light Mode</option>
        <option value='dark-mode'>Dark Mode</option>
      </select>
    </div>
  )
}
