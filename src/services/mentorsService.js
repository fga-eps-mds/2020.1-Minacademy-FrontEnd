import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { MENTOR_ENDPOINT } from './endpoints/mentor';
import api from './api';

const getLearners = createAsyncThunk('mentor/getLearners', async (values, { rejectWithValue }) => {
  try {
    const response = await api.get(MENTOR_ENDPOINT)
    return response.data
  } catch (error) {
    return rejectWithValue([])
  }
})

const assignLearner = createAsyncThunk('mentor/assignLearner', async (values, { rejectWithValue }) => {
  try {
    const response = await api.patch(MENTOR_ENDPOINT, values);
    toast.success(`${response.data.learner.name} é sua nova aprendiz!`);
    return response.data;
  } catch (error) {
    toast.dark('Nenhum aprendiz disponivel no momento', { toastId: "customId" })
    return rejectWithValue(error.response.data.isAvailable)
  }
});

const unassignLearner = createAsyncThunk('mentor/unassignLearner', async (learnerID, { rejectWithValue }) => {
  try {
    const response = await api.delete(MENTOR_ENDPOINT, {params: { learnerID }});
    toast.success('Aprendiz desvinculado com sucesso');
    return response.data
  } catch (error) {
    toast.error('Ocorreu um erro ao desvincular aprendiz')
    return rejectWithValue(error.response.data.learners)
  }
})

const changeAvailability = createAsyncThunk('mentor/changeAvailability', async (values, { rejectWithValue }) => {
  try {
    const response = await api.patch(`${MENTOR_ENDPOINT}/availability`)
    return response.data
  } catch (error) {
    return rejectWithValue(null)
  }
})

const validateMentor = createAsyncThunk('mentor/validateMentor', async (values, { rejectWithValue }) => {
  try {
    const response = await api.patch(`${MENTOR_ENDPOINT}/validation`)
    return response.data
  } catch(error) {
    return rejectWithValue(error.response.data.isAvailable)
  }
})

export {
  assignLearner,
  unassignLearner,
  getLearners,
  changeAvailability,
  validateMentor
}