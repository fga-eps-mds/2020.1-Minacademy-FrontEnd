import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';
import {
  USER_ENDPOINT,
  LOGIN_ENDPOINT,
  LOGOUT_ENDPOINT,
  FORGOT_PASSWORD_ENDPOINT,
  CHANGE_PASS_ENDPOINT,
  CHANGE_ENDPOINT,
} from './endpoints/users';
import { setAvailability, setValidationAttempts } from '../slices/mentorSlice'; // eslint-disable-line import/no-cycle
import { setMentorRequest } from '../slices/learnerSlice';
/* eslint-disable no-undef */
const listUsers = async () => {
  try {
    const response = await api.get(USER_ENDPOINT);
    return response.data;
  } catch (error) {
    return error;
  }
};

const login = createAsyncThunk(
  'users/login',
  async (values, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.post(LOGIN_ENDPOINT, values);
      toast.success(`Seja bem-vindo ${response.data.user.name}!`);
      dispatch(setAvailability(response.data.user.isAvailable)); // eslint-disable-line no-undef
      dispatch(setMentorRequest(response.data.user.mentor_request));
      dispatch(setValidationAttempts(response.data.user.attempts));
      sessionStorage.setItem('accessToken', response.data.accessToken);
      return response.data;
    } catch (err) {
      if (!err.response) {
        toast.error(
          'Estamos com problemas no servidor, tente novamente mais tarde!'
        );
      } else if (err.response.data.error === 'Invalid Email or Password') {
        toast.error('Email ou senha incorretos');
      }
      return rejectWithValue(null);
    }
  }
);

const logout = createAsyncThunk(
  'users/logout',
  async (values, { rejectWithValue }) => {
    try {
      const response = await api.post(LOGOUT_ENDPOINT);
      toast('Volte logo!');
      return response.data;
    } catch (error) {
      return rejectWithValue(null);
    }
  }
);

const registerRequest = createAsyncThunk(
  'users/register',
  async (values, { rejectWithValue }) => {
    try {
      const response = await api.post(USER_ENDPOINT, values);
      toast.success('Cadastro realizado com sucesso!');
      sessionStorage.setItem('accessToken', response.data.accessToken);
      return response.data;
    } catch (error) {
      if (error.response.data.error.includes('duplicate key error')) {
        toast.error('Email já cadastrado');
        return rejectWithValue({ error: 'email' });
      }
      toast.error('Erro no servidor');
      return rejectWithValue(null);
    }
  }
);

const changeToLearner = async () => {
  try {
    const response = await api.post(CHANGE_ENDPOINT);
    toast.success('Você agora é uma aprendiz!');
    return response.data;
  } catch (err) {
    toast.error('Estamos com problema no servidor');
    return err;
  }
};

const editUser = createAsyncThunk('users/edit', async (values, { rejectWithValue }) => {
  try {
    const response = await api.patch(USER_ENDPOINT, values);
    toast.success('Seus dados foram atualizados com sucesso =D');
    return response.data
  } catch (err) {
    toast.error('Não foi possivel atualizar seus dados =(');
    return rejectWithValue(err)
  }
});

const forgotPassword = async (values) => {
  try {
    const response = await api.put(FORGOT_PASSWORD_ENDPOINT, values);
    toast.success('Email enviado com sucesso');
    return response.data;
  } catch (err) {
    if (!err.response) {
      toast.error(
        'Estamos com problemas no servidor, tente novamente mais tarde!'
      );
    } else if (
      err.response.data.message === 'There is no such email in our platform'
    ) {
      toast.error(
        'Este endereço de email não está cadastrado em nossa plataforma!'
      );
    } else {
      toast.error('Erro ao ao enviar Email');
    }
    return err;
  }
};

const changeUserPassword = async (values) => {
  try {
    const response = await api.put(CHANGE_PASS_ENDPOINT, values);
    toast.success('Senha alterada com sucesso');
    return response.data;
  } catch (err) {
    if (err.response.data.error === 'Passwords do not coincide') {
      toast.error('Senhas não coincidem');
    } else if (
      err.response.data.error === 'You already changed your password'
    ) {
      toast.error(
        'Você já alterou a sua senha por este link. Se precisar de outro, vá à página de recuperação!'
      );
    } else {
      toast.error('Erro ao alterar senha');
    }
    return err;
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
