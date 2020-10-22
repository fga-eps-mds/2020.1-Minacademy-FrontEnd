import React from 'react'
import '../style.scss'

function Female(){
  return (
    <>
        <div id='welcome-learner' className='welcome-learner'>
            <h1>Seja Bem-Vinda</h1>
            <p>Essa plataforma ainda não está estável, mas estamos nos esforçando para entregar o melhor serviço para você! =D</p>
            <p>Os usuários que se indentificam com o gênero feminino podem se cadastrar como aprendiz e mentor, mas outros não ficam de fora! Mesmo que você não se identifique com o gênero feminino, pode se cadastrar como monitor e ajudar na jornada de outros aprendizes.</p>
            <p>Aprendizes podem usufruir de todo o conteúdo do tutorial e responder as questões de fixação ao final de cada módulo. Os monitores também possuem acesso ao tutorial, mas não conseguem acessar as atividades dentro dos módulos.</p>
            <p>Obs.: Quando você se cadastra como monitor ainda não está validado e não pode se vincular a aprendizes. Os critérios dessa validação ainda não foram implementados, mas por enquanto você pode fazer o nosso tutorial e assim que o finalizar seu perfil será validado AUTOMATICAMENTE!</p>
        </div>
    </>
  );
}

export default Female;