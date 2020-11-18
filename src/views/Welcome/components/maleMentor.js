import React from 'react'
import '../style.scss'
import { Link } from 'react-router-dom';

function MaleMentor(){
  return (
    <>
      <div>
        <h1>Seja Bem-vindo</h1>
        <br/>
        <p>Você já foi cadastrado com sucesso na plataforma Minacademy, e agora poderá explorar tudo que temos para oferecer!</p>
        <p>Infelizmente, você ainda não é um mentor validada na plataforma, então não poderá ajudar as aprendizes a concluir o
          tutorial introdutório de Django</p>
        <p>Para que você se torne um de nossos mentores validados, precisamos que você passe por uma avaliação
          para comprovar seus conhecimentos acerca do conteúdo do curso. Também iremos disponibilizar o nosso tutorial,
          para que você possa ver tudo que está sendo abordado na nossa plataforma.</p>
        <ul>As regras da avaliação são as seguintes:
          <li>- Você precisará atingir uma nota maior ou igual a 70% para ser aprovada.</li>
          <li>- Caso não consiga em sua primeira tentativa, não se preocupe. Pois você possui um total de 3 tentativas.</li>
        </ul>
        <p>Após sua aprovação em nossa plataforma, você poderá escolher ficar disponivél para mentoria das aprendizes,
          deste modo, assim que uma aprendiz solicitar um mentor, você poderá ser vinculado automaticamente a ela,
          contando com um chat para que vocês possam se comunicar, com o intuito de ajuda-la a concluir todo o tutorial,
          da melhor maneira possível. E se em algum momento você se sentir desconfortável com sua aprendiz,
          você poderá solicitar para que remova-a da sua lista de aprendizes a qualquer momento, e para evitar aborrecimentos,
          vocês não serão mais vinculados novamente.
        </p>
        <p>Se uma de suas aprendizes conseguir concluir todas as atividades do tutorial Minacademy, ela será promovida a mentora
          e vocês serão, infelizmente, removidos um da lista de mentoria do outro. No entanto, você receberá um certificado
          comprovando o seu serviço voluntário de ajuda à aprendizes em nossa plataforma.
        </p>
        <p>Agora que você entendeu como a nossa plataforma funciona, você poderá fazer a nossa avaliação, ou então deixar para fazer
          mais tarde e explorar a nossa plataforma.
        </p>
        <div className='links'>
            <br/>
            <br/>
            <Link to='/avaliacao' className='test-link'>Fazer a Avaliação</Link>
            <Link to='/dashboard' className='dashboard-link'>Quero ser avaliado depois</Link>
        </div>
      </div>
    </>
  );
}

export default MaleMentor;