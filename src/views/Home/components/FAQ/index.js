import React from 'react';

function FAQ() {
  return (
  <div id="FAQ" className="FAQ">
      <br />
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
          <h2>Quem pode se tornar mentor(a)?</h2>
          <p>
            Aprendizes que terminaram o tutorial e as atividades se tornam
            automaticamente mentoras. Além disso, qualquer pessoa pode 
            se cadastrar como mentor(a), sendo necessário apenas ser 
            aprovado(a) em uma avaliação para comprovar sua aptidão.
          </p>
        </div>
        <div id="question3" className="question_left">
          <h2>Como uma aprendiz obtém o certificado?</h2>
          <p>
            Você receberá o certificado de conclusão do tutorial assim que responder corretamente todas
            as atividades dos módulos.
          </p>
        </div>
        <div id="question4" className="question_hight">
          <h2>Como um(a) mentor(a) obtém certificados?</h2>
          <p>
            Assim que uma das aprendizes do(a) mentor(a) concluir todo o tutorial
            e receber o certificado de conclusão do tutorial, o(a) mentor(a), da mesma forma, receberá um
            certificado de mentoria voluntária. 
          </p>
        </div>
        <div id="question5" className="question_left">
          <h2>Como solicitar um(a) mentor(a)?</h2>
          <p>
            Acessando sua conta, haverá uma guia chamada Mentoria, onde é possível solicitar mentoria.
            Após ser vinculada a um dos nossos mentores, vocês poderão se comunicar clicando no ícone do
            chat que ficará sempre visível no canto inferior direito da plataforma.
          </p>
        </div>
        <div id="question6" className="question_hight">
          <h2>Como solicitar uma aprendiz?</h2>
          <p>
            Acessando sua conta, haverá uma guia chamada Mentoria, onde é possível solicitar novas aprendizes.
            Após a vinculação, vocês poderão se comunicar clicando no ícone do chat que ficará sempre visível
            no canto inferior direito da plataforma. 
          </p>
        </div>
      </div>
        <div id="question7" className="question_left">
          <h2>Como remover um(a) mentor(a)?</h2>
          <p>
            Acessando a mesma guia Mentoria, será exibido o card do seu/sua mentor(a). Na parte de baixo deste card
            há a opção de desvincular-se do(a) mentor(a). Quando clicar neste botão, aparecerá uma mensagem, para ter
            certeza de que você realmente quer remover o seu/sua mentor(a), então basta confirmar sua escolha.
          </p>
        </div>
        <div id="question8" className="question_hight">
          <h2>Como remover uma aprendiz?</h2>
          <p>
          Acessando a guia Mentoria, será exibido a lista de suas aprendizes. Na parte de baixo desses cards,
          há uma opção de desvincular-se da aprendiz. Quando clicar nesse botão, aparecerá uma mensagem para
          você confirmar que quer realmente remover sua aprendiz. Por fim, basta confirmar sua escolha.
          </p>
        </div>
      <br />
    </div>
  );
}

export default FAQ;