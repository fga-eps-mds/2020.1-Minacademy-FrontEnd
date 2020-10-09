import React from 'react';
import './style.scss';
import { useHistory } from 'react-router-dom';
import vector from '../../assets/images/vector.svg';
import infoBar from '../../assets/images/infoBar.svg';
import Button from '../../components/Button';
import infobarImage from '../../assets/images/infobarImage.png';
import infobarImage2 from '../../assets/images/infobarImage2.png';

function Home() {
  const history = useHistory()
  return (
    <>
      <div className="vector">
        <img src={vector} alt="imagemFundo" />
        <h1 >Nós encorajamos mulheres a se apaixonarem por programação.</h1>
      </div>


      <div id="infoBar" className="infoBar">
        <img className='infobar--shape' src={infoBar} alt="descricao" />
        <div className="infoBar--text">
          <h1>A iniciativa Minacademy</h1>
          <h2>Minacademy é uma plataforma para incentivar mulheres a programarem. </h2>
          <p>Na plataforma é oferecido um curso sobre Django, um framework para desenvolvimento web.</p>
          <Button onClick={() => history.push('/login')} small >Explorar</Button>
        </div>
        <img className='infoBar--image' src={infobarImage} alt='curso' />
      </div>

      <div id="infoBar2" className="infoBar2">
        <div className="infoBar2--text">
          <h1>Como funciona</h1>
          <p>Para auxiliar o tutorial, disponibilizado pela iniciativa Django Girls, é possível interagir com um mentor, que irá te auxiliar no tutorial. </p>
        </div>
        <Button onClick={() => history.push('/login')} small>Explorar</Button>
        <img className='infoBar2--image2' src={infobarImage2} alt='funcionamento' />
      </div>
    </>
  );
}

export default Home;
