import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LearnerCertificate from './Components/LearnerCertificate';
import { getLearnerCertificate } from '../../services/certificatesServices';

function Certificate() {
  const [certificate, setCertificate] = useState([]);
  const { _id } = useParams();

  useEffect(() => {
    getLearnerCertificate(_id).then((data) => setCertificate(data.certificate));
  }, []);

  const { user, workload, courseType, createdAt } = certificate;

  return (
    <LearnerCertificate
      name={user?.name}
      courseType={courseType}
      lastname={user?.lastname}
      completedModules={user?.completedModules?.length}
      workload={workload}
      conclusion={createdAt}
    />
  );
}
export default Certificate;
