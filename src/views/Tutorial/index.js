import React from 'react';
import './style.scss'
import Markdown from './components/Markdown';
import Activities from './components/Activities';

function Tutorial() {
  return (
  <div className="tutorial">
    <div className="tutorial__content">
      <div className="tutorial__content--header">
        <div>
          <h1>Tutorial</h1>
          <p>0% total concluído</p>
        </div>
        <div className="tutorial__content--header--progress">
          0 atividades completas
        </div>
      </div>
      <div className="tutorial__content--body">
        <Activities />
        <Markdown />
      </div>
    </div>
  </div>
  );
}

export default Tutorial;