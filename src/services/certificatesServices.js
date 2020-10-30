import { createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';
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
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.learnerCertificate);
    }
  }
);

const getAllCertificates = createAsyncThunk (
  'certificate/getllCertificates',
  async (values, { rejectWithValue }) => {
    try {
      const response = await api.get(CERTIFICATE_ENDPOINT);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export { getLearnerCertificate, generateCertificate, getAllCertificates };
