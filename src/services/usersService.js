import api from './api';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { USER_ENDPOINT, LOGIN_ENDPOINT, LOGOUT_ENDPOINT, FORGOT_PASSWORD_ENDPOINT, CHANGE_PASS_ENDPOINT, CHANGE_ENDPOINT } from './endpoints/users';
import {MENTOR_REQUEST_ENDPOINT} from './endpoints/learner';


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

const isEmailUsed = async (value) => {
  try {
    const response = await api.get(USER_ENDPOINT+`?email=${value}`);
    return response.data;
  }catch (err) {
    return [];
  }
}

const registerRequest = createAsyncThunk('users/register', async (values) => {
  try {
    const response = await api.post(USER_ENDPOINT, values);
    toast.success('Cadastro realizado com sucesso!');
    return response.data.user;
  } catch (err) {
    toast.error('Estamos com problema no servidor')
  }
});

const changeToLearner = async () => {
    console.log('Entrou');
    try{
        const response = await api.post(CHANGE_ENDPOINT);
        toast.success('Você agora é uma aprendiz!');
        console.log(response.data);
        return response.data;
    } catch (err) {
        toast.error('Estamos com problema no servidor');
    }
};

const editUser = async (values) => {
  try {
    const response = await api.patch(USER_ENDPOINT, values);
    console.log(response.data)
    toast.success('Informações atualizadas!')
  } catch (err) {
    toast.error('Não foi possivel editar o perfil')
  }
};


const forgotPassword = async (values) => {
  try {
    const response = await api.put(FORGOT_PASSWORD_ENDPOINT, values);
    console.log(response.data)
    alert('Email enviado')
    return response.data;
  } catch (err) {
    alert('Erro ao ao enviar Email')
  }
};

const changeUserPassword = async (values) => {
  try {
    const response = await api.put(CHANGE_PASS_ENDPOINT, values);
    console.log(response.data)
    alert('Senha alterada com sucesso')
  } catch (err) {
    alert('Erro ao alterar senha')
  }
};

export {
  listUsers,
  login,
  logout,
  isEmailUsed,
  registerRequest,
  editUser,
  forgotPassword,
  changeUserPassword,
  changeToLearner
}