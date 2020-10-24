import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CertificateList from './components/CertificateList';
import { generateCertificate } from '../../services/certificatesServices';
import { selectTotalProgress } from '../../slices/tutorialSlice';
import './style.scss';

/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */

function CourseCertificates({ totalProgress }) {
  const [learnerCertificate, setLearnerCertificate] = useState(null);

  useEffect(() => {
    if (totalProgress === 100) {
      generateCertificate().then((data) =>
        setLearnerCertificate(data.learnerCertificate)
      );
    }
  }, []);
  if (learnerCertificate === null) {
    return (
      <div className="courseCertificates">
        <div className="courseCertificates__header">
          <h1>Certificados</h1>
        </div>
        <h3>Você não possui nenhum certificado.</h3>
      </div>
    );
  }
  return (
    <>
      <div className="courseCertificates">
        <div className="courseCertificates__header">
          <h1>Certificados</h1>
          <p>Nessa página é possível visualizar seus certificados</p>
        </div>

        <div className="courseCertificates__body">
          <CertificateList
            certificateType="Certificado de conclusão de Tutorial"
            conclusionData={new Intl.DateTimeFormat('pt-BR', {
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            }).format(new Date(Date.parse(learnerCertificate?.createdAt)))}
            workload={learnerCertificate?.workload}
            id={learnerCertificate._id}
          />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  totalProgress: selectTotalProgress(state),
});

CourseCertificates.propTypes = {
  totalProgress: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(CourseCertificates);
