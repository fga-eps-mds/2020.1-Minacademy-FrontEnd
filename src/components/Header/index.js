import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { selectCurrentUser } from '../../slices/usersSlice';
import { logout } from '../../services/usersService';
import Button from '../Button';
import { ReactComponent as Logo } from '../../assets/images/minacademyLogo.svg';
import { ReactComponent as Bell } from '../../assets/images/notification.svg';
import { ReactComponent as Arrow } from '../../assets/images/arrow.svg';
import { ReactComponent as Hamburguer } from '../../assets/images/hamburguer.svg';
import './style.scss';

function Header({ currentUser, logout }) {
  const history = useHistory();
  const [hidden, setHidden] = useState(true)

  const responsive = () => {
    let nav = document.getElementsByClassName('header__navigation');
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
        <Logo width={210} className="name" />
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
            <Link className="header__navigation-option" to="/mentoria">
              Mentoria
            </Link>
          </>
        ) : (
          <>
            <Link className="header__navigation-option" to="/login" >
              Tutorial
            </Link>
            <a className="header__navigation-option" href="/#infoBar2">
              Como funciona
            </a>
            <a className="header__navigation-option" href="/#infoBar">
              A Iniciativa Minacademy
            </a>
          </>
        )}
      </div>

      <div className="header__navigation-action">
        {currentUser ? (
          <>
            <div>
              <Bell className="header__navigation-action-icon" width={20}  height={23} />
              <span
                className="header__navigation-action-name"
                onClick={() => setHidden(!hidden)}
              >
              {currentUser.name}  <Arrow className="header__navigation-action-icon" width={14}  height={15}/>
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
          <Hamburguer width={25}  height={25}/>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
