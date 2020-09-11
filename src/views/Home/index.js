import React from 'react';
import './style.css';
import vector from '../../assets/images/vector.svg';
import infoBar from '../../assets/images/infoBar.svg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import infobarImage from '../../assets/images/infobarImage.png';

function Home() {
  return (
    <>
      <Header />
      <div className="vector">
        <img src={vector} alt="dale" />
        <h1>Nós encorajamos mulheres a se apaixonarem por programação</h1>
      </div>
      <div className="infoBar">
        <img src={infoBar} alt="dale" />
      </div>
      <Footer />
    </>
  );
}

export default Home;
