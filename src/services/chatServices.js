import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit'
import api from './api';

const listUsers = async () => {
  try {
    const response = await api.get(USER_ENDPOINT);
    return response.data;
  } catch (error) {
    return error;
  }
};

const login = createAsyncThunk('users/login', async (values, { dispatch, rejectWithValue }) => {
  try {
    const response = await api.post(LOGIN_ENDPOINT, values);
    toast.success(`Seja bem-vindo ${response.data.user.name}!`)
    dispatch(setAvailability(response.data.user.isAvailable)) // eslint-disable-line no-undef
    dispatch(setMentorRequest(response.data.user.mentor_request))
    dispatch(setValidationAttempts(response.data.user.attempts))
    return response.data.user
  } catch (err) {
    toast.error('Email ou senha incorretos')
    return rejectWithValue(null)
  }
});

export {
  listUsers,
  login
}
