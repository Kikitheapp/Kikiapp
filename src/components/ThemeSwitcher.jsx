import React from 'react'

export default function ThemeSwitcher() {
  return (
    <select
      className='theme-switcher'
      onChange={(e) => {
        console.log(e.target.value)
        if (e.target.value === 'dark-mode') {
          document.getElementById('body').classList.toggle('dark-mode')
        } else {
          document.getElementById('body').classList.toggle('dark-mode')
        }
      }}
    >
      <option value='light-mode'>Light Mode</option>
      <option value='dark-mode'>Dark Mode</option>
    </select>
  )
}
