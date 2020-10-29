import { createSlice, createSelector } from '@reduxjs/toolkit';
import { generateCertificate } from '../services/certificatesServices';

const initialState = {
  loading: false,
  certificate: null,
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
      state.certificate = action.payload;
      console.log("PENDING")
      state.loading = true;
    },
    [generateCertificate.fulfilled]: (state, action) => {
      state.certificate = action.payload;
      console.log("FULLFIELD")
      state.loading = false;
    },
    [generateCertificate.rejected]: (state, action) => {
      state.certificate = action.payload;
      console.log("REJECTED")
      state.loading = false;
    },
  },
});

const selectCertificateState = (state) => state.certificate;

export const loading = createSelector(
  [selectCertificateState],
  (certificate) => certificate.loading
);

export const selectCertificate = createSelector(
  [selectCertificateState],
  (certificate) => certificate
);

export default certificateSlice.reducer;
