import api from './api';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { USER_ENDPOINT } from './endpoints';
import { LOGIN_ENDPOINT } from './endpoints';


const listUsersRedux = createAsyncThunk('users/listUsersRedux', async () => {
  const response = await api.get(USER_ENDPOINT);
  return response.data;
});

const listUsers = async () => {
  try {
    const response = await api.get(USER_ENDPOINT);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

const login = async (values) => {
  try {
    const response = await api.post(LOGIN_ENDPOINT, values);
    alert(`Você está logado ${response.data.user.name}`)
    console.log(response.data)

  } catch (err) {
    console.log(err)
    alert('Email ou senha incorretos')
  }

}


export const registerRequest = async (values) => {
  try {
    const headers = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const response = await api.post(USER_ENDPOINT, values, headers);
    console.log(response.data)
    alert('Cadastro realizado com sucesso')
  } catch (err) {
    alert('Erro no cadastro, tente novamente.')
  }
}



export {
  listUsers,
  listUsersRedux,
  login,
}