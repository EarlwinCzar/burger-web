import React from 'react'
import '../styles/header.css'
import aheadlogo from '../assets/aheadlogo.png'
import aheadmenu from '../assets/aheadmenu.png'


function Header() {
  return (
    <header className='header'>
      <nav className='header-nav'>
        <div className='header-nav-logo-section'>
          <img src={aheadlogo}/>
          <p>burger</p>
        </div>
        <div className='header-nav-menu'>
          <ul className='header-nav-menu-list'>
            <li>home</li>
            <li>our outlets</li>
            <li>order</li>
            <li>contact</li>
          </ul>
        </div>
        <div className='header-nav-right'>
          <img src={aheadmenu}/>
        </div>
      </nav>
    </header>
  )
}

export default Header
