import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { websocket } from './websocket';
import api from './api';
import { CHAT_ENDPOINT } from './endpoints/chat';
import { store } from '../store';
import { setNewMessage } from '../slices/chatSlice';

websocket.on('NEW_MESSAGE_EVENT', (data) => {
  const { newMessage, from } = data;
  console.log('NOVA MENSAGEM CHAT: ', data);
  toast.success(`Você tem uma nova mensagem de ${from}`, { position: "top-left" })
  store.dispatch({ type: 'chat/setNewMessage', payload: newMessage })
});

websocket.on('NEW_CHAT_EVENT', (chat) => {
  console.log('NOVO CHAT: ', chat);
  store.dispatch({ type: 'chat/setNewChat', payload: chat })
});

const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async (values, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.post(CHAT_ENDPOINT, values);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.error);
      return rejectWithValue(null);
    }
  }
);

const getChats = createAsyncThunk(
  'chat/getChats',
  async (values, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.get(CHAT_ENDPOINT);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.error);
      return rejectWithValue([]);
    }
  }
);

export { sendMessage, getChats };
