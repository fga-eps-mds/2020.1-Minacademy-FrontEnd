import { createSlice, createSelector } from '@reduxjs/toolkit';
import { assignMentor, cancelMentorRequest, unassignMentor, getMentor } from '../services/learnersService'

const initialState = {
  loading: false,
  fetchingMentor: false,
  mentor: null,
  mentorRequest: false
};

const learnerSlice = createSlice({
  name: 'learner',
  initialState,
  reducers: {
    /* eslint-disable no-unused-vars */
    /* eslint-disable no-param-reassign */
    removeMentor(state, action) {
      state.mentor = null
    },
    setMentorRequest(state, action) {
      state.mentorRequest = action.payload
    }
  },
  extraReducers: {
    [assignMentor.pending]: (state, action) => {
      state.loading = true
    },
    [assignMentor.fulfilled]: (state, action) => {
      if(action.payload.mentor) state.mentor = action.payload 
      state.mentorRequest = true
      state.loading = false
    },
    [assignMentor.rejected]: (state, action) => {
      state.mentorRequest = action.payload
      state.loading = false
    },

    [unassignMentor.pending]: (state, action) => {
      state.fetchingMentor = true
    },
    [unassignMentor.fulfilled]: (state, action) => {
      state.mentor = action.payload.mentor
      state.mentorRequest = action.payload.mentorRequest
      state.fetchingMentor = false
    },
    [unassignMentor.rejected]: (state, action) => {
      state.mentor = action.payload
      state.fetchingMentor = false
    },

    [getMentor.pending]: (state, action) => {
      state.fetchingMentor = true
    },
    [getMentor.fulfilled]: (state, action) => {
      state.mentor = action.payload
      state.fetchingMentor = false
    },
    [getMentor.rejected]: (state, action) => {
      state.mentor = action.payload
      state.fetchingMentor = false
    },
    [cancelMentorRequest.fulfilled]: (state, action) => {
      state.mentorRequest = action.payload
    },
    [cancelMentorRequest.rejected]: (state, action) => {
      state.mentorRequest = action.payload
      state.loading = false
    }

    // [changeAvailability.fulfilled]: (state, action) => {
    //   state.mentorRequest = action.payload
    // },
    // [changeAvailability.rejected]: (state, action) => {
    //   state.mentorRequest = state.mentorRequest
    // }
  }

});

const selectLearnerState = state => state.learner;

export const loading = createSelector(
  [selectLearnerState],
  learner => learner.loading
)

export const fetchingMentor = createSelector(
  [selectLearnerState],
  learner => learner.fetchingMentor
)

export const selectMentor = createSelector(
  [selectLearnerState],
  learner => learner.mentor
)

export const selectMentorRequest = createSelector(
  [selectLearnerState],
  learner => learner.mentorRequest
)

export const { removeLearner, setMentorRequest } = learnerSlice.actions;
export default learnerSlice.reducer;