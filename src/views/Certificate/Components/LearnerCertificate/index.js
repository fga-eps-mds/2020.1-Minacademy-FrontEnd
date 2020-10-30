import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../../../assets/images/minacademyLogo.svg';

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
      <div className="certificate__header">
        <Logo />
        <h1>Certificado de Conclusão de Tutorial Minacademy</h1>
      </div>
      <div className="certificate__body">
        <h4>Consquistado por</h4>
        <h3>
          {name} {lastname}
        </h3>

        <h4>Concluído em</h4>
        <h3>{conclusion}</h3>
        <h4>Módulos concluídos </h4>
        <h3>{completedModules}</h3>
        <h4>Carga horária: {workload}h</h4>
      </div>
      <div className="certificate__footer">
        <p>
          Certificamos que {name} {lastname} conclui o tutorial
          da Minacademy ao completar todo o tutorial Django
          Girls até a data. {conclusion}.
        </p>
        <span># {id}</span>
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
