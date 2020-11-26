import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import { HashLink as ScrollLink } from 'react-router-hash-link'
import { selectCurrentUser } from '../../slices/usersSlice';
import { logout as logoutImport } from '../../services/usersService';
import { closeWebSocket } from '../../services/websocket';
import Button from '../Button';
import { ReactComponent as Logo } from '../../assets/images/minacademyLogo.svg';
import { ReactComponent as Bell } from '../../assets/images/notification.svg';
import { ReactComponent as Arrow } from '../../assets/images/arrow.svg';
import { ReactComponent as Hamburguer } from '../../assets/images/hamburguer.svg';
import './style.scss';

function Header({ currentUser, logout }) { // eslint-disable-line no-shadow
  const history = useHistory();
  const [hidden, setHidden] = useState(true)

  const responsive = () => {
    let nav = document.getElementsByClassName('header__navigation'); // eslint-disable-line no-undef
    if (nav.length > 0) {
      nav[0].className += '-responsive';
    } else {
      nav = document.getElementsByClassName('header__navigation-responsive'); // eslint-disable-line no-undef
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
            <NavLink className="header__navigation-option" to="/dashboard">
              Dashboard
            </NavLink>
            {currentUser.userType === 'Mentor' && !currentUser?.isValidated
              ? <NavLink className="header__navigation-option" to="/avaliacao">
                 Avaliação
                </NavLink>
              : null
            }
            <NavLink className="header__navigation-option" to="/tutorial">
              Tutorial
            </NavLink>
            <NavLink className="header__navigation-option" to="/mentoria">
              Mentoria
            </NavLink>
          </>
        ) : (
          <>
            <Link className="header__navigation-option" to="/login" >
              Tutorial
            </Link>
            <ScrollLink 
              className="header__navigation-option" 
              to="/#infoBar"
              spy
              smooth
            >
              A Iniciativa Minacademy
            </ScrollLink>
            <ScrollLink 
              className="header__navigation-option" 
              to="/#infoBar2"
              spy
              smooth
            >
              Como funciona
            </ScrollLink>
            <ScrollLink 
              className="header__navigation-option"
              to="/#FAQ"
              spy
              smooth
            >
              Perguntas Frequentes
            </ScrollLink>
          </>
        )}
      </div>

      <div className="header__navigation-action">
        {currentUser ? (
          <>
            <div>
            <div className="header__navigation-action--resources">
              <Bell className="header__navigation-action-icon" width={20}  height={23} />
                <span
                  className="header__navigation-action-name"
                  onClick={() => setHidden(!hidden)}
                >
                {currentUser.name}  <Arrow className="header__navigation-action-icon arrow" width={14}  height={14}/>
                </span>
            </div>
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
                        closeWebSocket()
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
  logout: () => dispatch(logoutImport()),
});

Header.defaultProps = {
  currentUser: null,
};

Header.propTypes = {
  currentUser: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.object
  ]),
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
