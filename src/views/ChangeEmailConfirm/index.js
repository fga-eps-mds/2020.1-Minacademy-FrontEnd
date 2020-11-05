import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';
import { Link } from 'react-router-dom';

/* eslint-disable no-shadow */
function ChangeEmailConfirm({ currentUser, assignMentor }) {
  /* eslint-disable no-nested-ternary */
  return (
    <>
      <div id='changeEmailConfirm' className='changeEmailConfirm'>
        <h1>Confirmação de Email</h1>
        <p>Seu email foi alterado com sucesso. Agora voce pode fazer o login com seu novo endereço de email</p>
        <p>Clique <Link to='/login' className='login-link'>aqui</Link> para ir para a página de login</p>
      </div>
    </>
  );
};

export default connect()(ChangeEmailConfirm);
