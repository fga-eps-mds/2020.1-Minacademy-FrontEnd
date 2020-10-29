import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit'
import api from './api';
import {
  USER_ENDPOINT,
  LOGIN_ENDPOINT,
  LOGOUT_ENDPOINT,
  FORGOT_PASSWORD_ENDPOINT,
  CHANGE_PASS_ENDPOINT,
  CHANGE_ENDPOINT
} from './endpoints/users';
import { setAvailability, setValidationAttempts } from '../slices/mentorSlice';
import { setMentorRequest } from '../slices/learnerSlice';

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

const logout = createAsyncThunk('users/logout', async (values, { rejectWithValue }) => {
  try {
    const response = await api.post(LOGOUT_ENDPOINT);
    toast('Volte logo!')
    return response.data
  } catch (error) {
    return rejectWithValue(null)
  }
});

const registerRequest = createAsyncThunk('users/register', async (values, { rejectWithValue }) => {
  try {
    const response = await api.post(USER_ENDPOINT, values);
    toast.success('Cadastro realizado com sucesso!');
    return response.data.user;
  } catch (err) {
    toast.error('Estamos com problema no servidor')
    return rejectWithValue(null)
  }
});

const changeToLearner = async () => {
  try {
    const response = await api.post(CHANGE_ENDPOINT);
    toast.success('Você agora é uma aprendiz!');
    return response.data;
  } catch (err) {
    toast.error('Estamos com problema no servidor');
    return err
  }
};

const editUser = createAsyncThunk('users/edit', async (values, { rejectWithValue }) => {
  try {
    const response = await api.patch(USER_ENDPOINT, values);
    toast.success('Informações atualizadas!')
    return response.data
  } catch (err) {
    toast.error('Não foi possivel editar o perfil')
    return rejectWithValue(err)
  }
});

const forgotPassword = async (values) => {
  try {
    const response = await api.put(FORGOT_PASSWORD_ENDPOINT, values);
    toast.success('Email enviado com sucesso')
    return response.data;
  } catch (err) {
    toast.error('Erro ao ao enviar Email')
    return err
  }
};

const changeUserPassword = async (values) => {
  try {
    const response = await api.put(CHANGE_PASS_ENDPOINT, values);
    toast.success('Senha alterada com sucesso')
    return response.data
  } catch (err) {
    toast.error('Erro ao alterar senha')
    return err
  }
};

export {
  listUsers,
  login,
  logout,
  registerRequest,
  editUser,
  forgotPassword,
  changeUserPassword,
  changeToLearner,
};
