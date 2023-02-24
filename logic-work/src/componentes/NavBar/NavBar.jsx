import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget'
// import style from "./style.css"

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to="/"><img src="../../src/assets/logo.png" alt="caca" style={{width:"100px"}} /></NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/categorias/placaDeVideo" className={({ isActive })=> isActive ? "btn btn-primary" :"btn btn-outline-primary" }>Placas de Video</NavLink>
            <NavLink to="/categorias/procesador" className={({ isActive })=> isActive ? "btn btn-primary" :"btn btn-outline-primary" }>Procesadores</NavLink>
          </Nav>
          <Nav>
            <NavLink to="/cart" style={{textDecoration:"none"}}>
              <CartWidget/>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar