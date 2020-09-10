import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import './style.css';
import '../../index.css';
import  minaLogo  from '../../assets/images/minaLogo.png';

function Header() {
  return (
    <>
      <Navbar bg="white" expand="md">
        <Navbar.Brand href="/"><img className="logo" src={minaLogo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Cursos</Nav.Link>
            <Nav.Link href="#link">Como funciona</Nav.Link>
            <Nav.Link href="#link">A Iniciativa Minacademy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <button className="login-button">
          Entrar
        </button>
      </Navbar>
    </>

  );
}

export default Header;