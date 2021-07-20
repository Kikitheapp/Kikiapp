import React from 'react'

export default function ThemeSwitcher() {
  return (
    <select
      className='theme-switcher'
      onChange={() => {

          document.getElementById('body').classList.toggle('dark-mode');
          let navbar = document.getElementById('navbar');
          navbar.classList.toggle('navbar-light');
          navbar.classList.toggle('navbar-dark');

      }}
    >
      <option value='light-mode'>Light Mode</option>
      <option value='dark-mode'>Dark Mode</option>
    </select>
  )
}
