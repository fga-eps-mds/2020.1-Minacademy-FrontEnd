import React from 'react'
import '../style.scss'
import { Link } from 'react-router-dom';

function Mentor({ gender }){
  return (
    <>
      <div>
        <br/>
        <p>{`Você já foi ${gender === 'Male' ? 'cadastrado' : 'cadastrada'} com sucesso na plataforma Minacademy, e agora poderá explorar tudo que temos para oferecer!`}</p>
        <p>{`Infelizmente, você ainda não é ${gender == 'Male'? 'um mentor validado' : 'uma mentora validada'}, então não poderá ajudar as aprendizes a concluir o
          tutorial introdutório de Django`}</p>
        <p>{`Para ser ${gender === 'Male'? 'validado' : 'validada'}, precisamos que você passe por uma avaliação
          para comprovar seus conhecimentos acerca do conteúdo do curso.`}</p>
        <ul>As regras da avaliação são as seguintes:
          <li>- Você precisará atingir uma nota maior ou igual a 70% para ser {`${gender === 'Male'? 'aprovado' : 'aprovada'}`}.</li>
          <li>- Caso não consiga em sua primeira tentativa, não se preocupe. Pois você possui um total de 3 tentativas.</li>
        </ul>
        <p>Após sua aprovação, você poderá escolher ficar disponível para mentoria,
          deste modo, assim que uma aprendiz solicitar um mentor, você poderá ser {`${gender === 'Male'? 'vinculado' : 'vinculada'}`} automaticamente a ela,
          contando com um chat para que vocês possam se comunicar. E se em algum momento você se sentir desconfortável 
          com sua aprendiz, você poderá solicitar para que remova-a da sua lista de aprendizes a qualquer momento, e para 
          evitar aborrecimentos, vocês não serão mais {`${gender === 'Male'? 'vinculados' : 'vinculadas'}`} novamente.
        </p>
        <p>Se uma de suas aprendizes conseguir concluir todas as atividades do tutorial Minacademy, ela será promovida e vocês serão, infelizmente, {`${gender === 'Male'? 'desvinculado' : 'desvinculada'}`}. No entanto, você receberá um certificado
          comprovando o seu serviço voluntário de ajuda à aprendizes em nossa plataforma.
        </p>
        <p>Agora que você entendeu como a nossa plataforma funciona, você poderá fazer a nossa avaliação, ou então deixar para fazer
          mais tarde e explorar a nossa plataforma.
        </p>
        <div className='links'>
              <Link to='/avaliacao' className='test-link'>Fazer a Avaliação</Link>
              <Link to='/dashboard' className='dashboard-link'>Quero ser avaliado depois</Link>
        </div>
      </div>
    </>
  );
}

export default Mentor;