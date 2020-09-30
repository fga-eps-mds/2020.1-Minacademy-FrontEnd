import React from 'react';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../slices/usersSlice'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './style.scss';
import minaLogo from '../../assets/images/minacademyLogo.svg';
import notification from '../../assets/images/notification.svg'
import Button from '../Button';
import { useHistory, Link } from 'react-router-dom';
import '../../index.css';
import { logout } from '../../services/usersService';

function Header({ currentUser, logout }) {
  const history = useHistory();
  return (
    <>
      <Navbar bg="white" expand="md">
        <Navbar.Brand href="/"><img className="logo" src={minaLogo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {currentUser ? (<>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/tutorial">Tutorial</Link>
              <Link to="/">Fórum</Link>
              <Link to="/">Ranking</Link>
            </>
            ) :
              (<>
                <Link to="/tutorial">Tutorial</Link>
                <Link to="#infoBar2">Como funciona</Link>
                <Link to="/">A Iniciativa Minacademy</Link>
              </>
              )}
          </Nav>
        </Navbar.Collapse>
        {currentUser ? (
          <>
            <img className="notification" src={notification} alt="logo" />
            <NavDropdown title={currentUser.name}>
              <Link to="/perfil">Perfil</Link>
              <Link to="/">Certificados</Link>
              <Link onClick={() => logout()}>Sair</Link>
            </NavDropdown>
          </>
        )
          : (
            <div className="nav-buttons">
              <Button onClick={() => { history.push('/cadastro') }} small>
                Cadastrar
              </Button>
              <Button onClick={() => { history.push('/login') }} inverted color small>
                Entrar
              </Button>
            </div>

          )}
      </Navbar>
    </>

  );

}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);