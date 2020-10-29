import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import CertificateList from './components/CertificateList';
import { generateCertificate } from '../../services/certificatesServices';
import { selectCertificate, loading } from '../../slices/certificateSlice';
import { selectTotalProgress } from '../../slices/tutorialSlice';
import './style.scss';

/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */

function CourseCertificates({
  totalProgress,
  certificate,
  generateCertificate,
  loading,
}) {
  useEffect(() => {
    if (totalProgress === 100) {
      generateCertificate();
    }
  }, []);
  if (certificate.certificate === null) {
    return (
      <div className="courseCertificates">
        <div className="courseCertificates__header">
          <h1>Certificados</h1>
        </div>
        <h3>Você não possui certificados.</h3>
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
        {loading && <Loader big />}
        <div className="courseCertificates__body">
          {certificate.certificate ? (
            <CertificateList
              certificateType="Certificado de conclusão de Tutorial"
              conclusionData={new Intl.DateTimeFormat('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
              }).format(
                new Date(Date.parse(certificate?.certificate?.createdAt))
              )}
              workload={certificate?.certificate?.workload}
              id={certificate?.certificate?._id}
            />
          ): null}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  totalProgress: selectTotalProgress(state),
  certificate: selectCertificate(state),
  loading: loading(state),
});

const mapDispatchToProps = (dispatch) => ({
  generateCertificate: () => dispatch(generateCertificate()),
});

CourseCertificates.propTypes = {
  totalProgress: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseCertificates);
