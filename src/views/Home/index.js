import React from 'react';
import './style.scss';
import vector from '../../assets/images/vector.svg';
import infoBar from '../../assets/images/infoBar.svg';
import Button from '../../components/Button';
import infobarImage from '../../assets/images/infobarImage.png';
import infobarImage2 from '../../assets/images/infobarImage2.png';
import { useHistory } from 'react-router-dom';
function Home() {
  const history = useHistory()
  return (
    <>
      <div className="vector">
        <img src={vector} alt="imagemFundo" />
        <h1 >Nós encorajamos mulheres a se apaixonarem por programação</h1>
      </div>


      <div className="infoBar">
        <img className='infobar--shape' src={infoBar} alt="descricao" />
        <div className="infoBar--text">
          <h1>A iniciativa Minacademy</h1>
          <h2>Minacademy é uma plataforma para incentivar mulheres a programarem. </h2>
          <p>Na plataforma é oferecido um curso sobre Django, um framework para desenvolvimento web.</p>
          <Button small >Explorar</Button>
        </div>
        <img className='infoBar--image' src={infobarImage} alt='curso' />
      </div>

      <div className="infoBar2">
        <div className="infoBar2--text">
          <h1>Como funciona</h1>
          <p>Para auxiliar o curso é possível interagir com um <span>mentor</span>, além do <span>fórum</span> para tirar dúvidas
        ou fazer uma observação. </p>
        </div>
        <Button small>Explorar</Button>
        <img className='infoBar2--image2' src={infobarImage2} alt='funcionamento' />
      </div>
    </>
  );
}

export default Home;
