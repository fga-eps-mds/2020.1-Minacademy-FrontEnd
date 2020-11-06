import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

/* eslint-disable no-shadow */
function ChangeEmailConfirm() {
  /* eslint-disable no-nested-ternary */
  return (
    <>
      <div id='changeEmailConfirm' className='changeEmailConfirm'>
        <h1>Mudança de Email</h1>
        <p>Um email foi enviado para seu endereço de email atual. Verifique sua caixa de emails e siga as instruções para confirmar a alteração do email.</p>
        <p><Link to='/dashboard' className='login-link'>Voltar para a Dashboard</Link></p>
      </div>
    </>
  );
};

export default ChangeEmailConfirm;
