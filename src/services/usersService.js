import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  USER_ENDPOINT,
  LOGIN_ENDPOINT,
  LOGOUT_ENDPOINT,
  PROFILE_ENDPOINT,
} from './endpoints/users';

import api from "./api";

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
    const response = await api.post(LOGIN_ENDPOINT, values);
    toast.success(`Seja bem-vindo ${response.data.user.name}!`)
    return response.data.user
  } catch (err) {
    console.log(err)
    toast.error('Email ou senha incorretos')
  }
});

const logout = createAsyncThunk('users/logout', async () => {
  try {
    const response = await api.post(LOGOUT_ENDPOINT);
    toast('Volte logo!')
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
    toast.success('Cadastro realizado com sucesso!')
    window.location.href = '/login'
  } catch (err) {
    toast.error('Estamos com problema no servidor')
  }
}

const editUser = async (values) => {
  try {
    const response = await api.post(PROFILE_ENDPOINT, values);
    console.log(response.data)
    toast.success('Informações atualizadas!')
  } catch (err) {
    toast.error('Não foi possivel editar o perfil')
  }
};


const recoveryPassword = async (values) => {
  try {
    const response = await api.post(PROFILE_ENDPOINT, values);
    console.log(response.data)
    alert('perfil editado com sucesso')
  } catch (err) {
    alert('Erro ao editar perfil.')
  }
};


const changePassword = async (values) => {
  try {
    const response = await api.post(PROFILE_ENDPOINT, values);
    console.log(response.data)
    alert('perfil editado com sucesso')
  } catch (err) {
    alert('Erro ao editar perfil.')
  }
};


export {
  listUsers,
  login,
  logout,
  recoveryPassword,
  changePassword,
  registerRequest,
  editUser,
}