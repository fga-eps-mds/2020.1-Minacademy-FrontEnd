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
  CHANGE_EMAIL_ENDPOINT
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
      if (err.response.data.error === 'Invalid Email or Password') {
        toast.error('Email ou senha incorretos');
      } else if (err.response.data.error === 'User not confirm registered') {
        toast.error('Você precisa confirmar seu cadastro. Por favor, verifique seu email');
      } else {
        toast.error(
          'Estamos com problemas no servidor, tente novamente mais tarde!'
        );
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
      toast.success('Lhe foi enviado um email para que você confirme seu cadastro. Verifique-o!');
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
    if (response.data.emailChange) {
      toast.success('Enviamos um email para que você possa confirmar a troca de seu endereço de email, verifique-o.')
    } else {
      toast.success('Seus dados foram atualizados com sucesso =D');
    }
    return response.data.user
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

const changeUserEmail = async (values) => {
  try {
    const response = await api.put(CHANGE_EMAIL_ENDPOINT, values);
    toast.success('Email alterado com sucesso')
    toast.success('Seu novo endereço de email: ' + response.data.email) // eslint-disable-line prefer-template
    return response.data
  } catch (err) {
     if(err.response.data.error === 'You already changed your email') {
      toast.error('Não foi solicitado a mudança de email através desse link ou ele ja expirou')
    } else {
      toast.error('Erro ao alterar o email')
    }
    return err
  }
};

const registerUser = createAsyncThunk(
  'users/confirmRegister',
  async (values, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.put(USER_ENDPOINT, values);
      if(response.data.user.gender === "Female"){
        toast.success(`Seja bem-vinda ${response.data.user.name}! Você foi cadastrada com sucesso`);
      } else {
        toast.success(`Seja bem-vindo ${response.data.user.name}! Você foi cadastrado com sucesso`);
      }
      dispatch(setAvailability(response.data.user.isAvailable)); // eslint-disable-line no-undef
      dispatch(setMentorRequest(response.data.user.mentor_request));
      dispatch(setValidationAttempts(response.data.user.attempts));
      sessionStorage.setItem('accessToken', response.data.accessToken);
      return response.data;
    } catch (err) {
      if (err.response.data.error === 'User already confirm register') {
        toast.error('Seu cadastro já foi feito na plataforma, ou o seu link expirou');
      } else {
        toast.error('Estamos com problemas no servidor, tente novamente mais tarde');
      }
      return rejectWithValue(null);
    }
  }
);

export {
  listUsers,
  login,
  logout,
  registerRequest,
  editUser,
  forgotPassword,
  changeUserPassword,
  changeToLearner,
  changeUserEmail,
  registerUser,
};
