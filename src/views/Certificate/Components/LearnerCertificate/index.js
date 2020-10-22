import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss'

function LearnerCertificate({name, lastname, completedModules, courseType, workload, conclusion }) {

  useEffect(() => {

  }, [])
  return (
    <div id='certificate' className='certificate'>
      <h1>Minacademy</h1>
      <h3>nome: {name} {lastname}</h3>
      <h3>tipo de certificado: {courseType}</h3>
      <h3>módulos completos: {completedModules}</h3>
      <h3>carga horária: {workload}</h3>
      <h3>Data de conclusão: {conclusion}</h3>
      
      <p>Certificamos que a {name} {lastname} concluiu o tutorial. </p>
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
