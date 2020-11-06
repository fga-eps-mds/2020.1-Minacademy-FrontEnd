import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { MENTOR_ENDPOINT } from './endpoints/mentor';
import api from './api';

const getLearners = createAsyncThunk('mentor/getLearners', async (values, { rejectWithValue }) => {
  try {
    const response = await api.get(MENTOR_ENDPOINT)
    return response.data
  } catch (error) {
    return rejectWithValue(error.response.data.learners || [])
  }
})

const assignLearner = createAsyncThunk('mentor/assignLearner', async (values, { rejectWithValue }) => {
  try {
    const response = await api.patch(MENTOR_ENDPOINT, values);
    toast.success(`${response.data.learner.name} é sua nova aprendiz!`);
    return response.data;
  } catch (error) {
    toast.dark('Nenhum aprendiz disponivel no momento', { toastId: "customId", autoClose: false })
    return rejectWithValue(error.response.data.isAvailable)
  }
});

const unassignLearner = createAsyncThunk('mentor/unassignLearner', async (learnerID, { rejectWithValue }) => {
  try {
    const response = await api.delete(MENTOR_ENDPOINT, {params: { learnerID }});
    toast.success('Aprendiz desvinculado com sucesso');
    // console.log(learnerID)
    // dispatch({ type: 'chat/removeChat', payload: learnerID })
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

const validateMentor = createAsyncThunk('mentor/validateMentor', async (values, { dispatch, rejectWithValue }) => {
  try {
    const response = await api.patch(`${MENTOR_ENDPOINT}/validation`)
    if (response.data.user.isValidated) {
      toast.success('É isso ai! Agora você pode aceitar aprendizes na página de monitoria!')
      dispatch({ type: 'user/setCurrentUser', payload: response.data.user })
    } else {
      toast.error(`Você não atingiu o resultado mínimo para ser validado.
      Seus acertos: ${response.data.result}.
      ${response.data.attempts ? 'Tente novamente!': ''}`, {autoClose: false})
    }
    response.data.dispatch = dispatch
    return response.data
  } catch(error) {
    return rejectWithValue(error.response.data)
  }
})

export {
  assignLearner,
  unassignLearner,
  getLearners,
  changeAvailability,
  validateMentor
}