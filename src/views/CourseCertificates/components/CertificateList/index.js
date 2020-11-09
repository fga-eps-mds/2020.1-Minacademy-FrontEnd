import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import { ReactComponent as Share } from '../../../../assets/images/share.svg';
import { ReactComponent as Download } from '../../../../assets/images/download.svg';
import CertificateTemplate from '../../../Certificate/Components/CertificateTemplate'
import Button from '../../../../components/Button'
import './style.scss';
import Loader from '../../../../components/Loader';

function CertificateList({ certificate }) {

  return (
    <div className="certificateList">
      <div className="certificateList__body">
        {certificate.courseType === 'Learner' && <h3>Certificado de Conclusao do Tutorial Minacademy</h3>}
        {certificate.courseType === 'Mentor' && <h3>Certificado de Mentoria</h3>}
        <p>Conquistado em: <span>{certificate.createdAt}</span></p>
      </div>
      <div className="certificateList__buttons">
        <span className="certificateList__buttons-share"><Share /></span>
        <PDFDownloadLink document={<CertificateTemplate certificateData={certificate} />} fileName="certificado_minacademy.pdf">
          {({ loading }) =>
            (loading
            ? <Loader />
            : <span className="certificateList__buttons-download" onClick={() => {
              window.open(`/certificado/${certificate._id}`, "_blank").focus()
            }}><Download /></span> )
          }
        </PDFDownloadLink>
      </div>
    </div>);
};

CertificateList.propTypes = {
  certificate: PropTypes.oneOfType([(PropTypes.object)]).isRequired,
}

export default CertificateList;
