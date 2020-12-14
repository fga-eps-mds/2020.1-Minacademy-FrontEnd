import React from 'react'
import '../style.scss'
import { Link } from 'react-router-dom'

function Learner(){
  return (
    <>
        <div id='welcome-learner' className='welcome-learner'>
            <br/>
            <p>Você já foi cadastrada com sucesso na plataforma Minacademy, e agora poderá explorar tudo que temos para oferecer!</p>
            <p>Vamos começar pelo principal, para você que está cadastrada como aprendiz, você poderá acessar o nosso tutorial,
              e em cada módulo, responder nossas atividades.</p>
            <p>Caso queira, a nossa plataforma também tem uma ótima opção para quem está começando neste mundo da programação,
              você poderá solicitar um de nossos mentores para te auxiliar no que for preciso, contando com um chat disponível
              para que vocês possam se comunicar, com o intuito de te ajudar a concluir todo o tutorial, da melhor maneira possível.
              E se em algum momento você se sentir desconfortável com seu/sua mentor(a), você poderá solicitar para que remova-a(o)
              como mentor(a) a qualquer momento, para evitar aborrecimentos, vocês não serão mais vinculados novamente.</p>
            <p>E ao concluir todas as atividades do tutorial você receberá um certificado da Minacademy, que poderá ser consultado,
              compartilhado e baixado quando você quiser. Não somente isso como você será automaticamente promovida para mentora
              na plataforma, e caso queira poderá se tornar mais uma de nossas incríveis mentoras e ajudar muitas outras aprendizes.
            </p>
            <p>Agora que entendeu como a nossa plataforma funciona, você pode prosseguir para a nossa dashboard, onde terá acesso à
              principais funcionalidades para você, vamos lá começar a explorar o nosso site?</p>
        </div>
        <div className='links'>
            <br/>
            <Link to='/dashboard' className='learner-dashboard-link'>Prosseguir para a Dashboard</Link>
        </div>
    </>
  );
}

export default Learner;