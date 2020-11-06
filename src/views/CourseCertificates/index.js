import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import CertificateList from './components/CertificateList';
import { getAllCertificates } from '../../services/certificatesServices';
import { selectCertificate, loading } from '../../slices/certificateSlice';
import './style.scss';

/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */

function CourseCertificates({
  certificate,
  getAllCertificates,
  loading,
}) {
  useEffect(() => {
    getAllCertificates();
  }, []);
  if (certificate.certificate === null) {
    return (
      <div className="courseCertificates">
        <div className="courseCertificates__header">
          <h1>Certificados</h1>
        </div>
        <h2>Você não possui certificados.</h2>
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
          {certificate.certificate.length ? certificate.certificate.map((certificateData) => (
              <CertificateList
                  certificateType={
                    certificateData.courseType === 'Learner'
                      ? 'Certificado de conclusão de Tutorial'
                      : 'Certificado de prestação de mentoria'
                  }
                  conclusionData={new Intl.DateTimeFormat('pt-BR', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                  }).format(new Date(Date.parse(certificateData.createdAt)))}
                  workload={certificateData.workload}
                  id={certificateData._id}
                />
              ))
            : (<h3>Você não possui certificados.</h3>)}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  certificate: selectCertificate(state),
  loading: loading(state),
});

const mapDispatchToProps = (dispatch) => ({
  getAllCertificates: () => dispatch(getAllCertificates()),
});

CourseCertificates.propTypes = {
  certificate: PropTypes.oneOfType([PropTypes.object]).isRequired,
  getAllCertificates: PropTypes.oneOfType([PropTypes.object]).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseCertificates);
