import { createSlice, createSelector } from '@reduxjs/toolkit';
import { assignMentor, getMentor } from '../services/learnersService'

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
    setAvailability(state, action) {
      state.mentorRequest = action.payload
    }
  },
  extraReducers: {
    [assignMentor.pending]: (state, action) => {
      state.loading = true
    },
    [assignMentor.fulfilled]: (state, action) => {
      state.mentor = action.payload
      state.loading = false
    },
    [assignMentor.rejected]: (state, action) => {
      state.loading = false
    },

    [getMentor.pending]: (state, action) => {
      state.fetchingMentor = true
    },
    [getMentor.fulfilled]: (state, action) => {
      state.mentor = action.payload
      state.fetchingMentor = false
    },
    [getMentor.rejected]: (state, action) => {
      state.fetchingMentor = false
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

// export const selectAvailability = createSelector(
//   [selectLearnerState],
//   learner => learner.mentorRequest
// )

export const { removeLearner, setAvailability } = learnerSlice.actions;
export default learnerSlice.reducer;