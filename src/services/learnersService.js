import api from './api';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit'
import {MENTOR_REQUEST_ENDPOINT, LEARNER_ENDPOINT } from './endpoints/learner';

const mentorRequest = createAsyncThunk('mentorShip/mentorRequest', async () => {
  try {
    const response = await api.patch(MENTOR_REQUEST_ENDPOINT);
    console.log(response.data)
    toast.success('Você agora tem um mentor')
    return response.data;
  } catch (err) {
    toast.error('No momento não temos mentores disponíveis porém, não se preocupe, assim que possível alocaremos um mentor para você!')
  }
});

const getMentor = createAsyncThunk('mentorship/getMentor', async () => {
  try {
    const response = await api.get(LEARNER_ENDPOINT)
    console.log(response.data)
    return response.data
  } catch(err) {
    toast.error('Não foram encontrados mentores')
  }
});

export {
  mentorRequest,
  getMentor
}