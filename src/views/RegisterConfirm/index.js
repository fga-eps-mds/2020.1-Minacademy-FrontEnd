import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import './style.scss';
import { useHistory, useParams } from 'react-router-dom';
import { registerUser as registerUserImport} from '../../services/usersService';
import { isLoading as isLoadingImport } from '../../slices/usersSlice';
// import { openWebSocket } from '../../services/websocket';
import Loader from '../../components/Loader';

/* eslint-disable no-shadow */
function RegisterConfirm({ registerUser, isLoading }) {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [countdown, setcountdown] = useState(5);
  const { registerLink } = useParams();
  const history = useHistory();

  useEffect(() => {
    registerUser({ registerLink })
    .then(unwrapResult) // eslint-disable-next-line no-unused-vars
    .then(res => setReady(true)) // eslint-disable-next-line no-unused-vars
    .catch(err => setError(true)) 
  }, [])

  useEffect(() => { // eslint-disable-line consistent-return
    if (ready) {
    const interval = setInterval(() => {
      setcountdown(countDown => countDown - 1);
    }, 1000);
    if (countdown === 0) {
      clearInterval(interval)
      history.push('/bem-vindo')
    }
    return () => clearInterval(interval);
    }
  }, [ready, countdown]);

  return (
    <div className="register-confirm">
      <div className="register-confirm__body">
      {(ready && !isLoading)
      ? <div className="register-confirm__success">
        <h3>Seu cadastro foi confirmado!</h3>
        <p>Iremos te redirecionar em: <span className="emphasis">{countdown}</span></p>
      </div>
      : <div className="register-confirm__loading">
          <Loader big />
          <span>Seu cadastro está sendo validado. Aguarde...</span>
        </div>
      }
      {(error && !isLoading) &&
        <div className="register-confirm__failed">
          <h3>Ocorreu um erro ao validar sua conta</h3>
          <p>Tente novamente mais tarde!</p>
        </div>
      }
      </div>
    </div>
  )
}

RegisterConfirm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: isLoadingImport(state),
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (credentials) => dispatch(registerUserImport(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterConfirm);
