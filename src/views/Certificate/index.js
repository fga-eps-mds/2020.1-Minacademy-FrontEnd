import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCertificateById } from '../../services/certificatesServices';
import './style.scss';
import CertificateTemplate from './Components/CertificateTemplate';
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
    <div className="certificate">
    {certificate
      ? <div className="pdf">
          <CertificateTemplate certificateData={certificate} image />
        </div>
      : null
    }
    </div>
  )
}
export default Certificate;
