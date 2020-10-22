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
  } catch (err) {
    toast.dark('Nenhum aprendiz disponivel no momento')
    return rejectWithValue([])
  }
});

const unassignLearner = async learnerID => {
  try {
    const response = await api.delete(MENTOR_ENDPOINT, {params: { learnerID }});
    toast.success('Aprendiz desvinculado com sucesso');
    return response.data
  } catch (error) {
    return error
  }
}

const changeAvailability = createAsyncThunk('mentor/changeAvailability', async (values, { rejectWithValue }) => {
  try {
    const response = await api.patch(`${MENTOR_ENDPOINT}/availability`)
    return response.data
  } catch (error) {
    return rejectWithValue(null)
  }
})

export {
  assignLearner,
  unassignLearner,
  getLearners,
  changeAvailability
}