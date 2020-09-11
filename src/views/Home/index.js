import React from 'react';
import './style.css';
import vector from '../../assets/images/vector.svg';
import infoBar from '../../assets/images/infoBar.svg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import infobarImage from '../../assets/images/infobarImage.png';
import infobarImage2 from '../../assets/images/infobarImage2.png';
function Home() {
  return (
    <>
      <Header />
      <div className="vector">
        <img src={vector} alt="imagemFundo" />
        <h1 >Nós encorajamos mulheres a se apaixonarem por programação</h1>
      </div>

      <div className="infoBar">
        <img class='infobarShape' src={infoBar} alt="descricao" />
        <h1 className="title">A iniciativa Minacademy</h1>
        <h2>Minacademy é uma plataforma para incentivar mulheres a programarem. </h2>
        <p>Na plataforma é oferecido um curso sobre Django, um framework para desenvolvimento web.</p>
        <Button>Explorar</Button>
        <img class='infobarImage' src={infobarImage} alt='curso' />
      </div>

      <div className="infoBar2">
        <h1>Como funciona</h1>
        <p>Para auxiliar o curso é possível interagir com um <span>mentor</span>, além do <span>fórum</span> para tirar dúvidas
        ou fazer uma observação. </p>
        <Button>Explorar</Button>
        <img class='infobarImage2' src={infobarImage2} alt='funcionamento' />
      </div>
      <Footer />
    </>
  );
}

export default Home;
