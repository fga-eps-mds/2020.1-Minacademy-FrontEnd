import React from 'react';
import './style.scss';
import { useHistory, useParams } from 'react-router-dom';
import { changeUserEmail, logout} from '../../services/usersService';

/* eslint-disable no-shadow */
function RegisterConfirm(email) {
  return (
    <div>
      <h1>Seu E-mail foi validado</h1>
      <p>Agora voce pode acessar sua conta na página de login.</p>
    </div>
  )
};

export default RegisterConfirm;
