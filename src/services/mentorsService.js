import api from './api';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { MENTOR_ENDPOINT } from './endpoints/mentor';

const getLearners = createAsyncThunk('mentorship/getLearners', async () => {
  try {
    const response = await api.get(MENTOR_ENDPOINT)
    return response.data
  } catch (error) {
    console.log(error)
    return []
  }
})

const assignLearner = createAsyncThunk('mentorship/assignLearner', async values => {
  try {
    const response = await api.patch(MENTOR_ENDPOINT, values);
    toast.success(`${response.data.learner.name} é sua nova aprendiz!`);
    return response.data;
  } catch (err) {
    toast.dark('Nenhum aprendiz disponivel no momento')
    return []
  }
});

const unassignLearner = async learnerID => {
  try {
    const response = await api.delete(MENTOR_ENDPOINT, {params: { learnerID }});
    toast.success('Aprendiz desvinculado com sucesso');
  } catch (error) {
    console.log(error)
  }
}

const changeAvailability = createAsyncThunk('mentorship/changeAvailability', async (values, { getState }) => {
  try {
    const response = await api.patch(MENTOR_ENDPOINT+'/availability')
    console.log("DATA!!: ", response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
})

export {
  assignLearner,
  unassignLearner,
  getLearners,
  changeAvailability
}