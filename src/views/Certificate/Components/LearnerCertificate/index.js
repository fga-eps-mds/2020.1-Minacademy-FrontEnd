import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { ReactComponent as Logo } from '../../../../assets/images/minacademyLogo.svg'

function LearnerCertificate({
  name,
  lastname,
  completedModules,
  workload,
  conclusion,
  id,
}) {

  /* eslint-disable react/self-closing-comp */
  return (
    <div className="certificate">
      <div className="certificate-logo">
        <div className='logo-container'>
          <Logo/>
          <p># {id}</p>
        </div>

      </div>
      <div id="certificate-content" className="certificate-content">
        <p>
          Certificamos que a aprendiz{' '}
          <b>
            {name} {lastname}
          </b>{' '}
          concluiu o tutorial e as atividades relativos ao <b>curso introdutório de Django e Python</b> hospedado em nossa plataforma.{' '}
        </p>
        <br/>
        <br/>
        <h3>
          Módulos completos: <span>{completedModules}</span>
        </h3>
        <br/>
        <h3>
          Carga horária: <span>{workload}h</span>
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
  completedModules: null,
  workload: null,
  conclusion: null,
  id: null,
};

LearnerCertificate.propTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
  completedModules: PropTypes.number,
  workload: PropTypes.number,
  conclusion: PropTypes.string,
  id: PropTypes.string,
};
export default LearnerCertificate;
