import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { websocket } from './websocket'
import api from './api';

websocket.on('assigned', (data) => {
  console.log("NOVO CHAT: ", data)
})

const sendMessage = createAsyncThunk('chat/sendMessage', async (values, { dispatch, rejectWithValue }) => {
  try {
    const response = await api.post('CHAT_ENDPOINT', values);
    return response.data
  } catch (err) {
    // toast.error('Email ou senha incorretos')
    return rejectWithValue(null)
  }
});

export {
  sendMessage
}
