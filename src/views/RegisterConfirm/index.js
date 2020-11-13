import React from 'react';
import './style.scss';
import { useHistory, useParams } from 'react-router-dom';
import { registerUser } from '../../services/usersService';

/* eslint-disable no-shadow */
function RegisterConfirm() {
  const { registerLink } = useParams();
  const history = useHistory();

  const onLoad = () => {
    registerUser({ registerLink });
    history.push('/bem-vindo');
  }
  onLoad();
  return <div/>
};

export default RegisterConfirm;
