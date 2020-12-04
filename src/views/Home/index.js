import React from 'react';
import FAQ from './components/FAQ';
import { InfoBar, InfoBar2 } from './components/Infobar';
import './style.scss';


function Home() {
  return (
    <div className="home">
      <div className="home__main">
        <div className="image">
          <h1>Nós encorajamos mulheres a se apaixonarem por programação</h1>
        </div>
        <div className="image2" />
      </div>
      <InfoBar />
      <InfoBar2 />
      <FAQ />
    </div>
  );
}

export default Home;
