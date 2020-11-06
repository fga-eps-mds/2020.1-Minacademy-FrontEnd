import React from 'react';
import './style.scss';
import { Link, useParams } from 'react-router-dom'; // useHistory
import { changeUserEmail, logout} from '../../services/usersService';

/* eslint-disable no-shadow */
function ChangeEmailConfirm() {
  const { changeEmailLink } = useParams();
  // const history = useHistory();

  const onLoad = () => {
    changeUserEmail({ changeEmailLink});
    logout();

    // if(values.password === values.confirmPassword) history.push('/login');
  }
  /* eslint-disable no-nested-ternary */
  return (
    <>
      <div id='changeEmailConfirm' className='changeEmailConfirm'>
        {onLoad()}
        <h1>Confirmação de Email</h1>
        <p>Seu email foi alterado com sucesso. Faça o login para visualizar a alteração</p>
        <p>Clique <Link to='/login' className='login-link'>aqui</Link> para ir para a página de login</p>
      </div>
    </>
  );
};

export default ChangeEmailConfirm;
