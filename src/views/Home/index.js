import React from 'react';
import './style.scss';
import vector from '../../assets/images/vector.svg';
import FAQ from './components/FAQ';
import { Infobar, Infobar2 } from './components/Infobar';

function Home() {
  return (
    <>
      <div className="vector">
        <img src={vector} alt="imagemFundo" />
        <h1>Nós encorajamos mulheres a se apaixonarem por programação.</h1>
      </div>
      <Infobar />
      <Infobar2 />
      <FAQ />
    </>
  );
}

export default Home;
