import api from './api';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { QUESTIONS_ENDPOINTS } from './endpoints/modules';

const getQuestions = createAsyncThunk('tutorial/getQuestions' , async (module) => {
  try {
    const response = await api.get(`${QUESTIONS_ENDPOINTS}?moduleNumber=${module}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
})

const updateMarkdown = createAsyncThunk('tutorial/updateMarkdown', async (currentModule) => {
  const file = await import(`../assets/tutorial/${currentModule}.md`);
  const response = await fetch(file.default);
  const text = await response.text();
  return text
})

export {
  getQuestions,
  updateMarkdown
}