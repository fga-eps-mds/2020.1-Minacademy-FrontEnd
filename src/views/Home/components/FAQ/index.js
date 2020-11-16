import React from 'react';

function FAQ() {
  return (
  <div id="FAQ" className="FAQ">
        <h1>Perguntas Frequentes:</h1>
        <div id="questions" className="questions">
          <div id="question1" className="question1">
            <h2>Quem pode se tornar aprendiz?</h2>
            <p>
              Qualquer pessoa que se identifica com o gênero feminino pode se
              cadastrar como aprendiz.
            </p>
          </div>
          <div id="question2" className="question2">
            <h2>Quem pode se tornar mentor?</h2>
            <p>
              Alunas que terminaram o tutorial e as atividades se tornam
              automaticamente mentoras.
            </p>
          </div>
        </div>
      </div>
  );
}

export default FAQ;