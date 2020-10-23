import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LearnerCertificate from './Components/LearnerCertificate';
import { getLearnerCertificate } from '../../services/certificatesServices';
import Loader from '../../components/Loader'
function Certificate() {
  
  const [certificate, setCertificate] = useState(null);
  const { _id } = useParams();

  useEffect(() => {
    getLearnerCertificate(_id).then((data) => setCertificate(data.certificate));
  }, []);

  
  console.log(typeof certificate);

  if(certificate === null) {
    return <Loader big/>
  }
  else{
    const { user, workload, courseType, createdAt } = certificate
    return (
      <>
        <LearnerCertificate
          name={user.name}
          courseType={courseType}
          lastname={user.lastname}
          completedModules={user.completedModules.length}
          workload={workload}
          conclusion={new Intl.DateTimeFormat('pt-BR', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
          }).format(new Date(Date.parse(createdAt)))}
        />
      </>
    );
  }
}
export default Certificate;
