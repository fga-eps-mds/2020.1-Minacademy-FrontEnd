import api from './api';
import {  CERTIFICATE_ENDPOINT  } from './endpoints/certificates';


const getLearnerCertificate = async (values) => {
  try {
    const response = await api.post(CERTIFICATE_ENDPOINT , {_id: values});
    return response.data;
  } catch(error){
    window.location.href ="/" // eslint-disable-line no-undef 
    return error;
  }
};

const generateCertificate = async ()=> {
  try {
    const response = await api.patch(CERTIFICATE_ENDPOINT);
    return response.data;
  } catch(error){
    return error.response.data;
  }
};

export {
  getLearnerCertificate,
  generateCertificate
};