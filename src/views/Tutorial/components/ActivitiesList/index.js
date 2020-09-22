import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './style.scss';

function Activities() {
  const match = useRouteMatch();

  return (
  <div className="activities">
    <div className="activities__content">
      <div className="activities__content--header">
        <div>
          <h3>Forum</h3>
        </div>
      </div>
      <div className="activities__content--body">
        <p>
          <Link to={`${match.path}/atividades/1`}>Atividade</Link>
        </p>
        <p>
        <Link to={`${match.path}/atividades/2`}>Atividade</Link>
        </p>
      </div>
    </div>
  </div>
  );
}

export default Activities;