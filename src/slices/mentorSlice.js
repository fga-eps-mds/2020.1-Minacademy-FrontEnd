import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getLearners, assignLearner, unassignLearner, changeAvailability, validateMentor } from '../services/mentorsService'

const initialState = {
  loading: false,
  learners: [],
  isAvailable: false,
  fetchingLearners: false,
  validationAttempts: 3
};

const mentorSlice = createSlice({
  name: 'mentor',
  initialState,
  reducers: {
    /* eslint-disable no-unused-vars */
    /* eslint-disable no-param-reassign */
    removeLearner(state, action) {
      state.learners = state.learners.filter(learner => learner._id !== action.payload)
    },
    setAvailability(state, action) {
      state.isAvailable = action.payload
    },
    setValidationAttempts(state, action) {
      state.validationAttempts = action.payload
    }
  },
  extraReducers: {
    /* eslint-disable no-param-reassign */
    [assignLearner.pending]: (state, action) => {
      state.loading = true
    },
    [assignLearner.fulfilled]: (state, action) => {
      state.learners = action.payload.learner ? state.learners.concat(action.payload.learner) : state.learners
      state.isAvailable = action.payload.isAvailable
      state.loading = false
    },
    [assignLearner.rejected]: (state, action) => {
      state.isAvailable = action.payload
      state.loading = false
    },

    [unassignLearner.pending]: (state, action) => {
      state.fetchingLearners = true
    },
    [unassignLearner.fulfilled]: (state, action) => {
      state.learners = action.payload
      state.fetchingLearners = false
    },
    [unassignLearner.rejected]: (state, action) => {
      state.learners = action.payload
      state.fetchingLearners = false
    },

    [getLearners.pending]: (state, action) => {
      state.fetchingLearners = true
    },
    [getLearners.fulfilled]: (state, action) => {
      state.learners = action.payload
      state.fetchingLearners = false
    },
    [getLearners.rejected]: (state, action) => {
      state.fetchingLearners = false
    },

    [changeAvailability.fulfilled]: (state, action) => {
      state.isAvailable = action.payload
    },
    [changeAvailability.rejected]: (state, action) => {
      state.loading = false
    },


    [validateMentor.pending]: (state, action) => {
      state.loading = true
    },
    [validateMentor.fulfilled]: (state, action) => {
      state.validationAttempts = action.payload.attempts
      state.loading = false
    },
    [validateMentor.rejected]: (state, action) => {
      state.validationAttempts = action.payload.attempts
      state.loading = false
    }
  }

});

const selectMentor = state => state.mentor;

export const loading = createSelector(
  [selectMentor],
  mentor => mentor.loading
)

export const fetchingLearners = createSelector(
  [selectMentor],
  mentor => mentor.fetchingLearners
)

export const selectLearners = createSelector(
  [selectMentor],
  mentor => mentor.learners
)

export const selectAvailability = createSelector(
  [selectMentor],
  mentor => mentor.isAvailable
)

export const selectValidationAttempts = createSelector(
  [selectMentor],
  mentor => mentor.validationAttempts
)

export const { removeLearner, setAvailability, setValidationAttempts } = mentorSlice.actions;
export default mentorSlice.reducer;
