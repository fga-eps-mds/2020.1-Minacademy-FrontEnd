import React from 'react';
import './style.scss';
import { useHistory, useParams } from 'react-router-dom';
import { changeUserEmail, logout} from '../../services/usersService';

/* eslint-disable no-shadow */
function ChangeEmailConfirm() {
  const { changeEmailLink } = useParams();
  const history = useHistory();

  const onLoad = () => {
    changeUserEmail({ changeEmailLink});
    logout();
    history.push('/login');
  }
  onLoad();
  return <div />
};

export default ChangeEmailConfirm;
