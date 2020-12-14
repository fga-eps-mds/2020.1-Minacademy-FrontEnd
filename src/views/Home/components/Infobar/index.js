import React from 'react';
import { useHistory } from 'react-router-dom';
import infobarImage from '../../../../assets/images/infobarImage.webp';
import infobarImage2 from '../../../../assets/images/infobarImage2.webp';
import Button from '../../../../components/Button';
import './style.scss';

export function InfoBar() {
  const history = useHistory();

  return (
    <div id="infoBar" className="infoBar">
      <div className="infoBar__image">
      <img src={infobarImage} alt="descricao" />
      </div>
      <div className="infoBar__text">
        <h1>A iniciativa Minacademy</h1>
        <h2>
          Minacademy é uma plataforma para incentivar mulheres a programarem.{' '}
        </h2>
        <p>
          Na plataforma é oferecido um curso sobre Django, um framework para
          desenvolvimento web.
        </p>
        <Button onClick={() => history.push('/login')} shadow>
          Explorar
        </Button>
      </div>
    </div>
  );
}

export function InfoBar2() {
  const history = useHistory();

  return (
    <div id="infoBar2" className="infoBar no-background">
      <div className="infoBar__text">
        <h1>Como funciona</h1>
        <p>
          Para auxiliar o tutorial, disponibilizado pela iniciativa Django
          Girls, é possível interagir com um dos nossos mentores, que irá te
          auxiliar no tutorial.{'  '}
        </p>
        <Button onClick={() => history.push('/login')} shadow>
        Explorar
        </Button>
      </div>
      <div className="infoBar__image">
        <img src={infobarImage2} alt="funcionamento" />
      </div>
    </div>
  );
}
