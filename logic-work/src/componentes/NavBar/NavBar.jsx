import React from 'react'
import { CardWidget } from '../CardWidget/CardWidget'

export const NavBar = () => {
  //  const{menus,children} = props
    const categories =["Placas de Video","Procesadores","MothersBoards"]
  return (
    <div className='navBar'>
        <nav>
          <a className='navbar__menu' href='/'>Inicio</a>;
          <a className='navbar__menu' href='/producto'>Productos</a>;
          <a className='navbar__menu' href='/contacto'>Contactos</a>;
        </nav>
        <CardWidget />
    </div>
  )
}
