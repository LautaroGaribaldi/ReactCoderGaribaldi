import React from 'react'
import CardWidget from '../CardWidget/CardWidget'

export const NavBar = () => {
  return (
    <div className='navBar'>
        <nav>
            <a className='navbar__menu' href="/">Inicio</a>
            <a className='navbar__menu' href="/">Productos</a>
            <a className='navbar__menu' href="/">Contactos</a>
        </nav>
        <CardWidget />
    </div>
  )
}

export default NavBar