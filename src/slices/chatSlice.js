import { createSlice, createSelector } from '@reduxjs/toolkit';
import { sendMessage, getChats } from '../services/chatServices';

const initialState = {
  loading: false,
  sendingMessage: false,
  currentChat: null,
  chats: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    /* eslint-disable no-unused-vars */
    /* eslint-disable no-param-reassign */
    setNewMessage(state, action) {
      state.currentChat.messages = state.currentChat.messages.concat(action.payload)
    },
    setCurrentChat(state, action) {
      state.currentChat = action.payload
    }
  },
  extraReducers: {
    [sendMessage.pending]: (state, action) => {
      state.sendingMessage = true
    },
    [sendMessage.fulfilled]: (state, action) => {
      state.currentChat.messages = state.currentChat.messages.concat(action.payload)
      state.sendingMessage = false
    },
    [sendMessage.rejected]: (state, action) => {
      state.sendingMessage = false
    },

    [getChats.pending]: (state, action) => {
      state.loading = true
    },
    [getChats.fulfilled]: (state, action) => {
      state.chats = action.payload
      state.currentChat = action.payload[0]
      state.loading = false
    },
    [getChats.rejected]: (state, action) => {
      state.loading = false
    },
  }
});

const selectChatState = state => state.chat;
// export const selectChats = createSelector(
//   [selectChatState],
//   chat => chat.chats
// )

export const selectCurrentChat = createSelector(
  [selectChatState],
  chat => chat.currentChat
)

export const isLoading = createSelector(
  [selectChatState],
  chat => chat.loading
)

export const { setNewMessage, setCurrentChat } = chatSlice.actions;
export default chatSlice.reducer;