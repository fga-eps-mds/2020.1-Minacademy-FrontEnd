import api from './api';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { USER_ENDPOINT } from './endpoints';

const listUsersRedux = createAsyncThunk( 'users/listUsersRedux', async () => {
    const response = await api.get(USER_ENDPOINT);
    return response.data;
});

const listUsers = async() => {
  try {
    const response = await api.get(USER_ENDPOINT);
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