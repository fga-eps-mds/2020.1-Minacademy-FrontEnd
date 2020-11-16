import React from 'react'
import '../style.scss'
import { Link } from 'react-router-dom'

function Female(){
  return (
    <>
        <div id='welcome-learner' className='welcome-learner'>
            <h1>Seja Bem-Vinda</h1>
            <br/>
            <p>Agora que seu cadastro foi validado, você tem acesso a várias coisas dentro da plataforma</p>
            <p>Você pode por exemplo, acessar o nosso tutorial, e em cada módulo, responder nossas atividade</p>
            <p>Você pode solicitar um de nossos mentores para te auxiliar no que for preciso, tendo um chat disponível para que possam se comunicar, para que você possa concluir todo o tutorial</p>
            <p>Ao final de todo o tutorial você receberá um certificado e ainda terá a chance de se tornar mais uma de nossas incríveis monitoras
              e ajudar muitas outras pessoas
            </p>
            <p>Agora vai lá explora essa plataforma e mergulhe nesse maravilhoso mundo da programação</p>
        </div>
        <div className='links'>
            <br/>
            <Link to='/dashboard' className='learner-dashboard-link'>Prosseguir para a Dashboard</Link>
        </div>
    </>
  );
}

export default Female;