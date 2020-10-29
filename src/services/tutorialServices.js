import { createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';
import {
  QUESTIONS_ENDPOINT,
  MODULES_ENDPOINT,
  ANSWERS_ENDPOINT,
  PROGRESS_ENDPOINT
} from './endpoints/tutorials';

const getQuestions = createAsyncThunk('tutorial/getQuestions', async (query, { rejectWithValue }) => {
  try {
    const response = await api.get(QUESTIONS_ENDPOINT, {
      params: {
        ...query
      }
    });
    return response.data;
  } catch (error) {
    return rejectWithValue([]);
  }
});

const answerQuestion = createAsyncThunk('tutorial/answerQuestion', async (data, { rejectWithValue }) => {
  try {
    const response = await api.post(ANSWERS_ENDPOINT, data);
    return response.data;
  } catch (error) {
    return rejectWithValue({});
  }
});

const getProgress = createAsyncThunk('tutorial/getProgress', async (query, { rejectWithValue }) => {
  try {
    const response = await api.get(PROGRESS_ENDPOINT, {
      params: {
        ...query
      }
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
});


const updateMarkdown = createAsyncThunk('tutorial/updateMarkdown', async (currentModule, { rejectWithValue }) => {
  try {
    const file = await import(`../assets/tutorial/${currentModule}.md`);
    const response = await fetch(file.default); // eslint-disable-line no-undef
    const text = await response.text();
    return text
  } catch (error) {
    return rejectWithValue('Ocorreu um erro ao carregar o tutorial')
  }

});

const getModules = createAsyncThunk('tutorial/getModules', async () => {
  try {
    const response = await api.get(MODULES_ENDPOINT);
    return response.data;
  } catch (error) {
    return [];
  }
});

export {
  getQuestions,
  updateMarkdown,
  getModules,
  answerQuestion,
  getProgress,
};