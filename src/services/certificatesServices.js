import api from './api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CERTIFICATE_ENDPOINT } from './endpoints/certificates';

const getLearnerCertificate = async (values) => {
  try {
    const response = await api.post(CERTIFICATE_ENDPOINT, { _id: values });
    return response.data;
  } catch (error) {
    window.location.href = '/'; // eslint-disable-line no-undef
    return error;
  }
};

const generateCertificate = createAsyncThunk(
  'certificate/generateCertificate',
  async (values, { rejectWithValue }) => {
    try {
      const response = await api.patch(CERTIFICATE_ENDPOINT);
      console.log("teste", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.learnerCertificate);
    }
  }
);

export { getLearnerCertificate, generateCertificate };