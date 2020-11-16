import React from 'react';
import '../style.scss';
import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'
// import Button from "../../../components/Button";

function FemaleMentor() {
  // const history = useHistory()

  return (
    <>
      <div>
        <h1>Seja Bem-vinda</h1>
        <br />
        <p>Você está a um passo de ajudar as aprendizes da plataforma a conseguirem sua certificação em nosso curso introdutório de Django.</p>
        <p>Antes disso, precisamos que você passe por uma avaliação para comprovar seus conhecimentos acerca do conteúdo do curso.</p>
        <ul>As regras são as seguintes:
            <li>- Você precisará de uma nota maior ou igual a 70% para ser aprovada;</li>
          <li>- Caso não consiga de primeira, não se preocupe. Você terá um total de 3 tentativas.</li>
        </ul>
        <p>Após sua aprovação você terá acesso a lista de alunas que solicitaram mentoria e você poderá se colocar a disposição para ajudá-las, além de escolher alunas para mentorear</p>
        <div className='links'>
          <br />
          <br />
          <Link to='/avaliacao' className='test-link'>Fazer a Avaliação</Link>
          <Link to='/dashboard' className='dashboard-link'>Quero ser avaliada depois</Link>
        </div>
      </div>
    </>
  );
};


export default (FemaleMentor);