import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit'
import api from './api';
import { MENTOR_REQUEST_ENDPOINT, LEARNER_ENDPOINT } from './endpoints/learner';

const assignMentor = createAsyncThunk('learner/mentorRequest', async (values, { rejectWithValue }) => {
  try {
    const response = await api.patch(MENTOR_REQUEST_ENDPOINT);
    /* eslint-disable no-unused-expressions */
    response.status === 200 ? toast.success('Você agora tem um mentor') : toast.success('Infelizmente não temos mentores disponíveis')

    return response.data;
  } catch (err) {
    toast.error('Você ja possui um mentor!')
    return rejectWithValue(null)
  }
});

const getMentor = createAsyncThunk('learner/getMentor', async (values, { rejectWithValue }) => {
  try {
    const response = await api.get(LEARNER_ENDPOINT)
    return response.data
  } catch(err) {
    return rejectWithValue(null)
  }
});

const cancelMentorRequest = createAsyncThunk('learner/cancelMentorRequest', async (values, { rejectWithValue }) => {
  try {
    const response = await api.patch(`${LEARNER_ENDPOINT}/request`)
    toast.success('Solicitação cancelada com sucesso')
    return response.data
  } catch (error) {
    return rejectWithValue(null)
  }
})

export {
  assignMentor,
  getMentor,
  cancelMentorRequest
}