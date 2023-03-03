import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget'
// import style from "./style.css"

const categories = [
    { id: "1", name: "Placas de Video", idCategory: "placaDeVideo" },
    { id: "2", name: "Procesadores", idCategory: "procesador" }
]

export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink to="/"><img src="/logo.png" alt="Logo Logic Work" style={{ width: "100px" }} /></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {categories.map(category => <NavLink key={category.id} to={`/categorias/${category.idCategory}`} className={({ isActive }) => isActive ? "btn btn-primary" : "btn btn-outline-primary"}>{category.name}</NavLink>)}
                    </Nav>
                    <Nav>
                        <NavLink to="/cart" style={{ textDecoration: "none" }}>
                            <CartWidget />
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar