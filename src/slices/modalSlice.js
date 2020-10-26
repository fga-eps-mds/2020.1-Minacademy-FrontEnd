import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  hidden: true
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    /* eslint-disable no-unused-vars */
    /* eslint-disable no-param-reassign */
    toggleModalVisible(state, action) {
      state.hidden = !state.hidden
    }
  }
});

const selectModal = state => state.modal;
export const selectModalHidden = createSelector(
  [selectModal],
  modal => modal.hidden
)

export const { toggleModalVisible } = modalSlice.actions;
export default modalSlice.reducer;