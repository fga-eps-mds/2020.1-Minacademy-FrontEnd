import api from './api';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { GET_USERS } from './endpoints';

const listUsersRedux = createAsyncThunk( 'users/listUsersRedux', async () => {
    const response = await api.get(GET_USERS);
    return response.data;
});

const listUsers = async() => {
  try {
    const response = await api.get(GET_USERS);
    return response.data;
  } catch(error) {
    console.log(error);
    return error;
  }
}

export {
  listUsers,
  listUsersRedux
}