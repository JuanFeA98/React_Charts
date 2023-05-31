import React from 'react'

import './styles.css'

export default function Header() {
  return (
    <header>
      <a href='/'>
        <div className="header_container">
          <div className="header__logo">
          </div>
          <h2>
            Header
          </h2>
        </div>
      </a>
    </header>
  )
}
