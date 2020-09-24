import api from './api';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { USER_ENDPOINT, LOGIN_ENDPOINT, LOGOUT_ENDPOINT, PROFILE_ENDPOINT } from './endpoints/users';



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

const login = createAsyncThunk('users/login', async (values) => {
  try {
    const response = await api.post(LOGIN_ENDPOINT, values, { withCredentials: true });
    alert(`Você está logado ${response.data.user.name}`)
    return response.data.user
  } catch (err) {
    console.log(err)
    alert('Email ou senha incorretos')
  }
});


const logout = createAsyncThunk('users/logout', async () => {
  try {
    const response = await api.post(LOGOUT_ENDPOINT);
    console.log(response.data);
  } catch (error) {
    console.log(error.message)
  }
});



const registerRequest = async (values) => {
  try {
    const headers = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const response = await api.post(USER_ENDPOINT, values, headers);
    console.log(response.data)
    alert('Cadastro realizado com sucesso')
    window.location.href = '/login'
  } catch (err) {
    alert('Erro no cadastro, tente novamente.')
  }
}

const editUser = async (values) => {
  try {
    const response = await api.post(PROFILE_ENDPOINT, values);
    console.log(response.data)
    alert('perfil editado com sucesso')
  } catch (err) {
    alert('Erro ao editar perfil.')
  }
}




export {
  listUsers,
  listUsersRedux,
  login,
  logout,
  registerRequest,
  editUser
}