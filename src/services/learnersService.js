import api from './api';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit'
import {MENTOR_REQUEST_ENDPOINT} from './endpoints/learner';

const mentorRequest = async (values) => {
  try {
    const response = await api.put(MENTOR_REQUEST_ENDPOINT, values);
    console.log(response.data)
    alert('Voce agora tem um mentor')
    return response.data;
  } catch (err) {
    alert('No momento nao temos mentores disponível porém,  nao se preocupe, assim que possivel alocaremos um monitor alocaremos um monitor para voce!')
  }
};

const getMentor = (learner) => {
  
}

export {
  mentorRequest
}