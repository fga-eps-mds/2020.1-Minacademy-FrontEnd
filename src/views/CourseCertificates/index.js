import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import CertificateList from './components/CertificateList';
import { getAllCertificates } from '../../services/certificatesServices';
import { selectCertificates, loading } from '../../slices/certificateSlice';
import './style.scss';

/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */

function CourseCertificates({ certificates, getAllCertificates, isLoading }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    getAllCertificates().then(() =>
      setTimeout(() => {
        setReady(true)
      }, 100));
  }, []);

  return (
    <div className="courseCertificates">
      <div className="courseCertificates__header">
        <h1>Certificados</h1>
        {!isLoading && (certificates?.length === 0 || certificates === null)
          ? <h2>Você não possui certificados.</h2>
          : <>
            <h2>Você conquistou {certificates?.length} {certificates?.length > 1 ? 'certificados' : 'certificado'}.</h2>
            <h2>É possível baixar ou visualizá-los diretamente no navegador.</h2>
            </>
        }
      </div>
      {isLoading || !ready && (
        <div className="courseCertificates__fetching">
          <Loader big />
          <p>Buscando certificados, por favor aguarde...</p>
        </div>
        )}
      {ready && !isLoading && certificates &&
        <div className="courseCertificates__body">
          {
            certificates.map((certificate) =>
             <CertificateList key={certificate._id} certificate={certificate} />
            )
          }
        </div>
      }
    </div>
  );
}

CourseCertificates.defaultProps = {
  certificates: null,
};

CourseCertificates.propTypes = {
  certificates: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object)]),
  getAllCertificates: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  certificates: selectCertificates(state),
  isLoading: loading(state),
});

const mapDispatchToProps = (dispatch) => ({
  getAllCertificates: () => dispatch(getAllCertificates()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseCertificates);
