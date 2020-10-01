import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { selectCurrentUser } from '../../slices/usersSlice';
import { logout } from '../../services/usersService';
import Button from '../Button';
import { ReactComponent as Logo } from '../../assets/images/minacademyLogo.svg';
import { ReactComponent as Bell } from '../../assets/images/notification.svg';
import './style.scss';

function Header({ currentUser, logout }) {
  const history = useHistory();
  const [hidden, setHidden] = useState(true)

  const responsive = () => {
    var nav = document.getElementsByClassName('header__navigation');
    console.log(nav);
    if (nav.length > 0) {
      nav[0].className += '-responsive';
    } else {
      nav = document.getElementsByClassName('header__navigation-responsive');
      nav[0].className = 'header__navigation';
    }
  };

  return (
    <div className="header">
      <Link className="header__logo" to="/">
        <Logo className="name" />
      </Link>

      <div className="header__navigation">
        {currentUser ? (
          <>
            <Link className="header__navigation-option" to="/dashboard">
              Dashboard
            </Link>
            <Link className="header__navigation-option" to="/tutorial">
              Tutorial
            </Link>
            <Link className="header__navigation-option" to="/forum">
              Fórum
            </Link>
          </>
        ) : (
          <>
            <Link className="header__navigation-option" to="/">
              Tutorial
            </Link>
            <Link className="header__navigation-option" to="/">
              Como funciona
            </Link>
            <Link className="header__navigation-option" to="/">
              A Iniciativa Minacademy
            </Link>
          </>
        )}
      </div>

      <div className="header__navigation-action">
        {currentUser ? (
          <>
            <div>
              <Bell className="header__navigation-action-icon" />
              <span className="header__navigation-action-name">{currentUser.name}</span>
              <span className="header__navigation-action-dropdown"
                onClick={() => setHidden(!hidden)}
              >
                icon
              </span>
              {hidden ? null : (
                <div className="nav-dropdown">
                  <div className="nav-dropdown__items">
                    <Link
                      onClick={() => setHidden(!hidden)}
                      className="nav-dropdown__items-item"
                      to="/perfil"
                    >
                      Perfil
                    </Link>
                    <Link
                      onClick={() => setHidden(!hidden)}
                      className="nav-dropdown__items-item"
                      to="/certificados"
                    >
                      Certificados
                    </Link>
                    <Link
                      onClick={() => {
                        setHidden(!hidden)
                        logout()
                      }}
                      className="nav-dropdown__items-item"
                      to="/"
                    >
                      Sair
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                history.push('/login');
              }}
              inverted
              color
              small
            >
              Entrar
            </Button>
            <Button
              onClick={() => {
                history.push('/cadastro');
              }}
              inverted
              color
              small
            >
              Cadastrar
            </Button>
          </>
        )}
        <div className="icon" onClick={responsive}>
          icon
        </div>
      </div>
    </div>
    // <>
    //   <Navbar bg="white" expand="md">
    //     <Navbar.Brand href="/"><img className="logo" src={minaLogo} alt="logo" /></Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="mr-auto">
    //         {currentUser ? (<>
    //           <Link to="/dashboard">Dashboard</Link>
    //           <Link to="/tutorial">Tutorial</Link>
    //           <Link to="/">Fórum</Link>
    //           <Link to="/">Ranking</Link>
    //         </>
    //         ) :
    //           (<>
    //             <Link to="/tutorial">Tutorial</Link>
    //             <Link to="#infoBar2">Como funciona</Link>
    //             <Link to="/">A Iniciativa Minacademy</Link>
    //           </>
    //           )}
    //       </Nav>
    //     </Navbar.Collapse>
    //     {currentUser ? (
    //       <>
    //         <img className="notification" src={notification} alt="logo" />
    //         <NavDropdown title={currentUser.name}>
    //           <Link to="/perfil">Perfil</Link>
    //           <Link to="/">Certificados</Link>
    //           <Link onClick={() => logout()}>Sair</Link>
    //         </NavDropdown>
    //       </>
    //     )
    //       : (
    //         <div className="nav-buttons">
    //           <Button onClick={() => { history.push('/cadastro') }} small>
    //             Cadastrar
    //           </Button>
    //           <Button onClick={() => { history.push('/login') }} inverted color small>
    //             Entrar
    //           </Button>
    //         </div>

    //       )}
    //   </Navbar>
    // </>
  );
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
