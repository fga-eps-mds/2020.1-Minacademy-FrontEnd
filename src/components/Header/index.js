import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import './style.scss';
import minaLogo  from '../../assets/images/minacademyLogo.svg';
import Button from '../Button';


function Header() {
  return (
    <>
      <Navbar bg="white" expand="md">
        <Navbar.Brand href="/"><img className="logo" src={minaLogo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/curso">Cursos</Nav.Link>
            <Nav.Link href="/">Como funciona</Nav.Link>
            <Nav.Link href="/">A Iniciativa Minacademy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button inverted color small>
          Entrar
        </Button>
      </Navbar>
    </>

  );
}

export default Header;