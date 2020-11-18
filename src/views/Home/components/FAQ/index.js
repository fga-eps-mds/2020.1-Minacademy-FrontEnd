import React from 'react';

function FAQ() {
  return (
  <div id="FAQ" className="FAQ">
      <br></br>
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
          <h2>Como um aprendiz obtém o certificado?</h2>
          <p>
            Concluindo todo o tutorial disponível na plataforma, 
            respondendo corretamente todas as atividades relacionada 
            a cada módulo, você receberá o certificado de conclusão do tutorial.
          </p>
        </div>
        <div id="question4" className="question_hight">
          <h2>Como um mentor obtém certificados?</h2>
          <p>
            Assim que uma das aprendizes do(a) mentor(a) concluir todo o tutorial
            na platafoma, o(a) mentor(a) da mesma, receberá um certificado de serviço
            de ajuda voluntária na plataforma. 
          </p>
        </div>
        <div id="question5" className="question_left">
          <h2>Como solicitar um mentor?</h2>
          <p>
            Acessando sua conta, haverá uma guia chamada "Mentoria", onde é possível solicitar mentoria.
            Após ser vinculada a um dos nossos monitores, vocês poderão se comunicar clicando no ícone do
            chat que ficará sempre visível no canto inferior direito da platafoma. 
          </p>
        </div>
        <div id="question6" className="question_hight">
          <h2>Como solicitar um aprendiz?</h2>
          <p>
            Acessando sua conta, haverá uma guia chamada "Mentoria", onde é possível solicitar novos aprendizes.
            Após ser vinculada a uma de nossas aprendizes, vocês poderão se comunicar clicando no ícone do
            chat que ficará sempre visível no canto inferior direito da platafoma. 
          </p>
        </div>
      </div>
        <div id="question7" className="question_left">
          <h2>Como remover um mentor?</h2>
          <p>
            Acessando a mesma guia "Mentoria", aparecerá o card do seu mentor, na parte de baixo deste card
            há a opção de desvincular-se do mentor. Quando clicar neste botão, aparacerá uma mensagem, para ter
            certeza de que você realmente quer remover o seu mentor, então basta confirmar sua escolha.
          </p>
        </div>
        <div id="question8" className="question_hight">
          <h2>Como remover um aprendiz?</h2>
          <p>
            Acessando a mesma guia "Mentoria", aparecerá a lista dos cards de seus aprendizes, na parte de baixo destes
            cards há a opção de desvincular-se do aprendiz. Quando clicar neste botão, aparacerá uma mensagem, para ter
            certeza de que você realmente quer remover o seu aprendiz, então basta confirmar sua escolha.
          </p>
        </div>
      <br></br>
    </div>
  );
}

export default FAQ;