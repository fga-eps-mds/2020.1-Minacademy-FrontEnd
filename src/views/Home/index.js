import React from 'react';
import './style.scss';
import vector from '../../assets/images/vector.svg';
import infoBar from '../../assets/images/infoBar.svg';
import Button from '../../components/Button';
import infobarImage from '../../assets/images/infobarImage.png';
import infobarImage2 from '../../assets/images/infobarImage2.png';
function Home() {
  return (
    <>
      <div className="vector">
        <img src={vector} alt="imagemFundo" />
        <h1 >Nós encorajamos mulheres a se apaixonarem por programação</h1>
      </div>

      <div className="infoBar">
        <img className='infobar--shape' src={infoBar} alt="descricao" />
        <h1 className="title">A iniciativa Minacademy</h1>
        <h2>Minacademy é uma plataforma para incentivar mulheres a programarem. </h2>
        <p>Na plataforma é oferecido um curso sobre Django, um framework para desenvolvimento web.</p>
        <Button>Explorar</Button>
        <img className='infobarImage' src={infobarImage} alt='curso' />
      </div>

      <div className="infoBar2">
        <h1>Como funciona</h1>
        <p>Para auxiliar o curso é possível interagir com um <span>mentor</span>, além do <span>fórum</span> para tirar dúvidas
        ou fazer uma observação. </p>
        <Button>Explorar</Button>
        <img className='infobarImage2' src={infobarImage2} alt='funcionamento' />
      </div>
    </>
  );
}

export default Home;
