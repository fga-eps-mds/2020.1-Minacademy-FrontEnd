import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit'
import api from './api';
import { MENTOR_REQUEST_ENDPOINT, LEARNER_ENDPOINT } from './endpoints/learner';

const assignMentor = createAsyncThunk('learner/mentorRequest', async (values, { rejectWithValue }) => {
  try {
    const response = await api.patch(MENTOR_REQUEST_ENDPOINT);
    toast.success('Você agora tem um mentor')
    return response.data;
  } catch (err) {
    toast.error('No momento não temos mentores disponíveis porém, não se preocupe, assim que possível alocaremos um mentor para você!')
    return rejectWithValue(null)
  }
});

const getMentor = createAsyncThunk('learner/getMentor', async (values, { rejectWithValue }) => {
  try {
    const response = await api.get(LEARNER_ENDPOINT)
    return response.data
  } catch(err) {
    toast.error('Não foram encontrados mentores')
    return rejectWithValue(null)
  }
});

export {
  assignMentor,
  getMentor
}