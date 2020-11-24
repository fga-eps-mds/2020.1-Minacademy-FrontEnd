import React from 'react';
import Loader from '../../components/Loader';
import './style.scss'

export const Loading = () => (
  <div className="loading-page">
    <Loader big />
    <p>Carregando. Por favor, aguarde...</p>
  </div>
);

export default (Loading);
