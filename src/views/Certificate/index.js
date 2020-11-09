import React, { useEffect, useState } from 'react';
import { PDFViewer, PDFDownloadLink, BlobProvider } from '@react-pdf/renderer';
import { useParams } from 'react-router-dom';
import LearnerCertificate from './Components/LearnerCertificate';
import MentorCertificate from './Components/MentorCertificate';
import { getCertificateById } from '../../services/certificatesServices';
import './style.scss';
import CertificateTemplate from './Components/CertificateTemplate';
import logo from '../../assets/images/logo512.png'
import formatDate from '../../util/formatDate';

function Certificate() {
  const [certificate, setCertificate] = useState(null);
  const { _id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await getCertificateById(_id);
      response.createdAt = formatDate(response.createdAt)
      setCertificate(response)
    })()
  }, [getCertificateById]);
  /* eslint-disable no-else-return */

  return (
    <div className="pdfteste">
    {certificate
      ? <div className="teste">
          <CertificateTemplate certificateData={certificate} image />
        </div>
      : null
    }
    </div>
  )
}
export default Certificate;
