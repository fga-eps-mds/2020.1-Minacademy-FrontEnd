import api from './api';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { MENTOR_ENDPOINT } from './endpoints/mentor';

const assignLearner = createAsyncThunk('mentorship/assignLearner', async values => {
  try {
    const response = await api.patch(MENTOR_ENDPOINT, values);
    toast.success(`${response.data[response.data.length -1].name} é sua nova aprendiz!`);
    return response.data;
  } catch (err) {
    console.log(err)
    return []
  }
});

const unassignLearner = async learnerID => {
  try {
    const response = await api.delete(MENTOR_ENDPOINT, {params: { learnerID }});
    toast.success('Aprendiz desvinculado com sucesso');
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}


export {
  assignLearner,
  unassignLearner
}