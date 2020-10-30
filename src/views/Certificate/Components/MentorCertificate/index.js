import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../../../assets/images/minacademyLogo.svg';

function MentorCertificate({ name, lastname, workload, conclusion, id }) {
  /* eslint-disable react/self-closing-comp */
  return (
    <div className="certificate">
      <div className="certificate__header">
        <Logo />
        <h1>Certificado de prestação de mentoria</h1>
      </div>
      <div className="certificate__body">
        <h4>Consquistado por</h4>
        <h3>
          {name} {lastname}
        </h3>

        <h4>Concluído em</h4>
        <h3>{conclusion}</h3>
        <h4>Carga horária: {workload}h</h4>
      </div>
      <div className="certificate__footer">
        <p>
          Certificamos que {name} {lastname} prestou monitoria de forma
          voluntária na plataforma da Minacademy ao lecionar o tutorial Django
          Girls até a data {conclusion}.
        </p>
        <span># {id}</span>
      </div>
    </div>
  );
}

MentorCertificate.defaultProps = {
  name: null,
  lastname: null,
  workload: null,
  conclusion: null,
  id: null,
};

MentorCertificate.propTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
  workload: PropTypes.number,
  conclusion: PropTypes.string,
  id: PropTypes.string,
};
export default MentorCertificate;
