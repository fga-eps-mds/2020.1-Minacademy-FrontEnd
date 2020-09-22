import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './style.scss';

function Activity () {
  const match = useRouteMatch();
  return (
    <div className="activity">
      <h2>Componente_atividade </h2>
      <p>
        <Link to="/tutorial">Voltar</Link>
      </p>
    </div>
  );
}

export default Activity