import { createSlice, createSelector } from '@reduxjs/toolkit';
import { generateCertificate, getAllCertificates } from '../services/certificatesServices';
import formatDate from '../util/formatDate';

const initialState = {
  loading: false,
  certificates: null,
};

const certificateSlice = createSlice({
  name: 'certificate',
  initialState,
  reducers: {
    /* eslint-disable no-unused-vars */
    /* eslint-disable no-param-reassign */
  },
  extraReducers: {
    [generateCertificate.pending]: (state, action) => {
      state.loading = true;
    },
    [generateCertificate.fulfilled]: (state, action) => {
      action.payload.createdAt = formatDate(action.payload.createdAt);
      state.certificates = action.payload;
      state.loading = false;
    },
    [generateCertificate.rejected]: (state, action) => {
      state.loading = false;
    },

    [getAllCertificates.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllCertificates.fulfilled]: (state, action) => {
      action.payload.forEach((cert) => cert.createdAt = formatDate(cert?.createdAt)); // eslint-disable-line no-return-assign
      state.certificates = action.payload;
      state.loading = false;
    },
    [getAllCertificates.rejected]: (state, action) => {
      state.certificates = null;
      state.loading = false;
    },
  },
});

const selectCertificateState = (state) => state.certificate;

export const loading = createSelector(
  [selectCertificateState],
  (certificate) => certificate.loading
);

export const selectCertificates = createSelector(
  [selectCertificateState],
  (certificate) => certificate.certificates
);

export default certificateSlice.reducer;
