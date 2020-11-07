import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  hidden: true,
  chatIsOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    /* eslint-disable no-unused-vars */
    /* eslint-disable no-param-reassign */
    toggleModalVisible(state, action) {
      state.hidden = !state.hidden
    },
    toggleChatOpen(state, action) {
      if (action.payload) state.chatIsOpen = action.payload
      else state.chatIsOpen = !state.chatIsOpen
    }
  }
});

const selectModal = state => state.modal;
export const selectModalHidden = createSelector(
  [selectModal],
  modal => modal.hidden
)

export const selectChatIsOpen = createSelector(
  [selectModal],
  modal => modal.chatIsOpen
)

export const { toggleModalVisible, toggleChatOpen } = modalSlice.actions;
export default modalSlice.reducer;