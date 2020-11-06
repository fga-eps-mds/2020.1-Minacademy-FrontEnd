import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import { Link, useParams } from 'react-router-dom'; // useHistory
import { changeUserEmail } from '../../services/usersService';

/* eslint-disable no-shadow */
function ChangeEmailConfirm() {
  const { changeEmailLink } = useParams();
  // const history = useHistory();

  const onLoad = () => {
    changeUserEmail({ changeEmailLink});
    // if(values.password === values.confirmPassword) history.push('/login');
  }
  /* eslint-disable no-nested-ternary */
  return (
    <>
      <div id='changeEmailConfirm' className='changeEmailConfirm'>
        {onLoad()}
        <h1>Confirmação de Email</h1>
        <p>Seu email foi alterado com sucesso. Agora voce pode fazer o login com seu novo endereço de email</p>
        <p>Clique <Link to='/login' className='login-link'>aqui</Link> para ir para a página de login</p>
      </div>
    </>
  );
};

export default connect()(ChangeEmailConfirm);
