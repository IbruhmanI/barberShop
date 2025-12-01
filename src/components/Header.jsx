import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <NavLink to='/'><h1>BARBER</h1></NavLink>
          <div>
            <NavLink to='/blog'>Блог</NavLink>
            <NavLink to={'/about'}>Вакансий</NavLink>
            <NavLink to={'/about'}>О нас</NavLink>
          </div>
          <a href="tel:+996555123456">
            <h3>+996 (555) 12-34-56</h3>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
