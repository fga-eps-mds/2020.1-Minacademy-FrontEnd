import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { ReactComponent as Logo } from '../../../../assets/images/minacademyLogo.svg'

function LearnerCertificate({
  name,
  lastname,
  completedModules,
  courseType,
  workload,
  conclusion,
}) {

  /* eslint-disable react/self-closing-comp */
  return (
    <div id="certificate" className="certificate">
      <div id="certificate-logo" className="certificate-logo">
        <div id='logo-container' className='logo-container'>
          <Logo/>
        </div>
        {/* <h1>Minacademy</h1> */}


      </div>
      <div id="certificate-content" className="certificate-content">
        <p>
          Certificamos que a aprendiz{' '}
          <b>
            {name} {lastname}
          </b>{' '}
          concluiu o tutorial e as atividades.{' '}
        </p>
        <br/>
        <h3>
          tipo de certificado: <span>{courseType}</span>
        </h3>
        <br/>
        <h3>
          módulos completos: <span>{completedModules}</span>
        </h3>
        <br/>
        <h3>
          carga horária: <span>{workload}h</span>
        </h3>
        <br/>
        <h3>
          Data de conclusão: <span>{conclusion}</span>
        </h3>
      </div>
    </div>
  );
}

LearnerCertificate.defaultProps = {
  name: null,
  lastname: null,
  courseType: null,
  completedModules: null,
  workload: null,
  conclusion: null,
};

LearnerCertificate.propTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
  courseType: PropTypes.string,
  completedModules: PropTypes.number,
  workload: PropTypes.number,
  conclusion: PropTypes.string,
};
export default LearnerCertificate;
