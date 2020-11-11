import React from 'react';
import './style.scss';
import { useHistory, useParams } from 'react-router-dom';
import { changeUserEmail, logout} from '../../services/usersService';

/* eslint-disable no-shadow */
function RegisterNotice(email) {
  return (
    <div>
      <h1>Confirmação de cadastro</h1>
      <p>Um email foi enviado para o e-mail {email} para validar seu cadastro.</p>
      <p>Acesse sua caixa de e-mails e siga as instruções contidas no e-mail.</p>
    </div>
    
  )
};

export default RegisterNotice;
