import React from 'react';

function FAQ() {
  return (
  <div id="FAQ" className="FAQ">
        <h1>Perguntas Frequentes</h1>
        <div id="questions" className="questions">
          <div id="question1" className="question_left">
            <h2>Quem pode se tornar aprendiz?</h2>
            <p>
              Qualquer pessoa que se identifica com o gênero feminino pode se
              cadastrar como aprendiz.
            </p>
          </div>
          <div id="question2" className="question_hight">
            <h2>Quem pode se tornar mentor?</h2>
            <p>
              Alunas que terminaram o tutorial e as atividades se tornam
              automaticamente mentoras. Além disso, qualquer pessoa pode 
              se cadastrar como mentor, sendo necessário apenas ser 
              aprovado em uma avaliação para comprovar sua aptidão.
            </p>
          </div>
          <div id="question3" className="question_left">
            <h2>Como obter o certificado?</h2>
            <p>
              Concluindo todo o tutorial disponível na plataforma, 
              respondendo corretamente todas as atividades relacionada 
              a cada módulo, você receberá o certificado de conclusão do tutorial.
            </p>
          </div>
          <div id="question4" className="question_hight">
            <h2>Como solicitar um mentor?</h2>
            <p>
              Acessando sua conta, haverá uma guia chamada "Mentoria", onde é possível solicitar mentoria.
              Após ser vinculada a um dos nossos monitores, vocês poderão se comunicar clicando no ícone do
              chat que ficará sempre visível no canto inferior direito da platafoma. 
            </p>
          </div>
        </div>
      </div>
  );
}

export default FAQ;