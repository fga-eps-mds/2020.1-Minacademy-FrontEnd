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
      if (action.payload.chat === state.currentChat._id) {
        state.currentChat.messages = state.currentChat.messages.concat(
          action.payload
        );
      } else {
        state.chats
          .find((chat) => chat._id === action.payload.chat)
          .messages.push(action.payload);
      }
    },
    setNewChat(state, action) {
      state.chats = state.chats.concat(action.payload);
    },
    setCurrentChat(state, action) {
      const chat = state.chats.find((chat) =>
        chat.users.includes(action.payload._id)
      );
      chat.agentName = `${action.payload.name} ${action.payload.lastname} `;
      state.currentChat = chat;
    },
  },
  extraReducers: {
    [sendMessage.pending]: (state, action) => {
      state.sendingMessage = true;
    },
    [sendMessage.fulfilled]: (state, action) => {
      state.currentChat.messages = state.currentChat.messages.concat(
        action.payload
      );
      state.sendingMessage = false;
    },
    [sendMessage.rejected]: (state, action) => {
      state.sendingMessage = false;
    },

    [getChats.pending]: (state, action) => {
      state.loading = true;
    },
    [getChats.fulfilled]: (state, action) => {
      state.chats = action.payload;
      state.currentChat = action.payload[action.payload.length - 1];
      state.loading = false;
    },
    [getChats.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

const selectChatState = (state) => state.chat;
// export const selectChats = createSelector(
//   [selectChatState],
//   chat => chat.chats
// )

export const selectCurrentChat = createSelector(
  [selectChatState],
  (chat) => chat.currentChat
);

export const isLoading = createSelector(
  [selectChatState],
  (chat) => chat.loading
);

export const { setNewMessage, setCurrentChat } = chatSlice.actions;
export default chatSlice.reducer;
