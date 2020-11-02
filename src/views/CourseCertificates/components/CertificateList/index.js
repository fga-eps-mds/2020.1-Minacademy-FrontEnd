import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Share } from '../../../../assets/images/share.svg';
import { ReactComponent as Download } from '../../../../assets/images/download.svg';
import './style.scss';

function CertificateList({ certificateType, conclusionData, workload, id }) {
  const history = useHistory();
  return (
    id ? (
    <div className="certificateList">
      <div className="certificateList__body">
        <p>{certificateType}</p>
        <span>Conquistado em: {conclusionData}</span>
        <span>Carga horária: {workload}h</span>
      </div>
      <div className="certificateList__buttons">
        <Share />
        <Download onClick={() => history.push(`certificado/${id}`)}/>
      </div>
    </div>) :
    (
      <div>
        <h1> Você ainda não possui nenhum certificado.</h1>
      </div>
    )
  );
}

CertificateList.propTypes = {
  certificateType: PropTypes.string.isRequired,
  conclusionData: PropTypes.string.isRequired,
  workload: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
}

export default CertificateList;
