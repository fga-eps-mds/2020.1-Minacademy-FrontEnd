import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  socket: null,
  loading: false,
  sendingMessage: false,
  messages: []
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    /* eslint-disable no-unused-vars */
    /* eslint-disable no-param-reassign */
    setMessages(state, action) {
      console.log("set message: ", action)
      state.messages = state.messages.concat(action.payload)
    },
    openSocket(state, action) {
      state.socket = action.payload
    }
  },
  extraReducers: {
  }
});

const selectChat = state => state.chat;
export const selectMessages = createSelector(
  [selectChat],
  chat => chat.messages
)

export const isLoading = createSelector(
  [selectChat],
  chat => chat.loading
)

export const { setMessages, openSocket } = chatSlice.actions;
export default chatSlice.reducer;