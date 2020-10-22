import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
// import { ReactComponent as Logo } from '../../../../assets/images/minacademyLogo.svg'

function LearnerCertificate({name, lastname, completedModules, courseType, workload, conclusion }) {

  const month = conclusion.getMonth()
  const year = conclusion.getFullYear()
  const day = conclusion.getDay()
  useEffect(() => {

  }, [])
  return (
    <div id='certificate' className='certificate'>
      <div id='certificate-logo' className='certificate-logo'>
        {/* <Logo/> */}
        <h1>Minacademy</h1>
      </div>
      <div id='certificate-content' className='certificate-content'>
        <p>Certificamos que a aprendiz <b>{name} {lastname}</b> concluiu o tutorial e as atividades. </p>
        <h3>tipo de certificado: <span>{courseType}</span></h3>
        <h3>módulos completos: <span>{completedModules}</span></h3>
        <h3>carga horária: <span>{workload}</span></h3>
        <h3>Data de conclusão: <span>{day}/{month}/{year}</span></h3>
      </div>
    </div>
  );
}



LearnerCertificate.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  courseType: PropTypes.string.isRequired,
  completedModules: PropTypes.arrayOf(PropTypes.string).isRequired,
  workload: PropTypes.number.isRequired,
  conclusion: PropTypes.string.isRequired,
};
export default LearnerCertificate;
