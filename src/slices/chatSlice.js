import { createSlice, createSelector } from '@reduxjs/toolkit';
import { sendMessage, getChats } from '../services/chatServices'; // eslint-disable-line import/no-cycle

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
      } 
      state.chats
        .find((chat) => chat._id === action.payload.chat)
        .messages.push(action.payload);
      
    },
    removeChat(state, action) {
      state.chats = state.chats.filter((chat) => {
        return !chat.users.includes(action.payload.toString())
      })
      state.currentChat = state.chats[0] ? state.chats[0] : null
    },
    setNewChat(state, action) {
      state.chats = state.chats.concat(action.payload);
    },
    /* eslint-disable no-shadow */
    setCurrentChat(state, action) {
      const chat = state.chats.find((chat) =>
        chat.users.includes(action.payload._id)
      );
      if (chat) {
        chat.agentName = `${action.payload.name} ${action.payload.lastname}`;
        state.currentChat = chat;
      } else {
        state.currentChat = null;
      }
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
      state.chats
        .find((chat) => chat._id === action.payload.chat)
        .messages.push(action.payload);
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
      state.currentChat = action.payload.length ? action.payload[action.payload.length - 1] : null;
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

export const { setNewMessage, setCurrentChat, setNewChat } = chatSlice.actions;
export default chatSlice.reducer;
