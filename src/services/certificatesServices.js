import { createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';
import { CERTIFICATE_ENDPOINT } from './endpoints/certificates';

const getCertificateById = async (_id) => {
  try {
    const response = await api.get(`${CERTIFICATE_ENDPOINT}/${_id}`);
    return response.data;
  } catch (error) {
    // window.location.href = '/'; // eslint-disable-line no-undef
    return error;
  }
};

const generateCertificate = createAsyncThunk(
  'certificate/generateCertificate',
  async (values, { rejectWithValue }) => {
    try {
      const response = await api.post(CERTIFICATE_ENDPOINT);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.certificate);
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

export { getCertificateById, generateCertificate, getAllCertificates };
