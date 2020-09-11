import React from 'react';
import './style.css';
import vector from '../../assets/images/vector.svg';
import infoBar from '../../assets/images/infoBar.svg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import infobarImage from '../../assets/images/infobarImage.png';
import infobarImage2 from '../../assets/images/infobarImage2.png';

function Home() {
  return (
    <>
      <Header />
      <div className="vector">
        <img src={vector} alt="dale" />
        <h1>Nós encorajamos mulheres a se apaixonarem por programação</h1>
      </div>
      <div className="infoBar">
        <img class='infobarShape' src={infoBar} alt="dale" />
        <h1>Minacademy é uma plataforma para incentivar mulheres a programarem. </h1>
        <h2>Na plataforma é oferecido um curso sobre Django, um framework para desenvolvimento web.</h2>
        <img class='infobarImage' src={infobarImage} alt='dale' />
        <h3>Para auxiliar o curso é possível interagir um <span>mentor</span>, além do <span>fórum</span> para tirar dúvidas
        ou fazer uma observação. </h3>
        <img class='infobarImage2' src={infobarImage2} alt='dale' />
      </div>
      <Footer />
    </>
  );
}

export default Home;
