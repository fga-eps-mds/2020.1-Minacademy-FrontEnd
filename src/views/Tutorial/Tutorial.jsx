import React from 'react';
import './style.scss'
import Markdown from './components/Markdown/Markdown';

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
        <Markdown />
      </div>
    </div>
  </div>
  );
}

export default Tutorial;