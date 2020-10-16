import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getLearners, assignLearner, changeAvailability } from '../services/mentorsService'

const initialState = {
  loading: false,
  fetchingLearners: false,
  learners: [],
  isAvailable: false
};

const mentorshipSlice = createSlice({
  name: 'mentorship',
  initialState,
  reducers: {
    removeLearner(state, action) {
      console.log(action.payload)
      state.learners = state.learners.filter(learner => learner._id !== action.payload)
    },
    setAvailability(state, action) {
      state.isAvailable = action.payload
    }
  },
  extraReducers: {
    [assignLearner.pending]: (state, action) => {
      state.loading = true
    },
    [assignLearner.fulfilled]: (state, action) => {
      state.learners = action.payload.learner ? state.learners.concat(action.payload.learner) : state.learners
      state.isAvailable = action.payload.isAvailable
      state.loading = false
    },
    [assignLearner.rejected]: (state, action) => {
      state.loading = false
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
      state.isAvailable = state.isAvailable
    }
  }
    
});

const selectMentorship = state => state.mentorship;

export const loading = createSelector(
  [selectMentorship],
  mentorship => mentorship.loading
)

export const fetchingLearners = createSelector(
  [selectMentorship],
  mentorship => mentorship.fetchingLearners
)

export const selectLearners = createSelector(
  [selectMentorship],
  mentorship => mentorship.learners
)

export const selectAvailability = createSelector(
  [selectMentorship],
  mentorship => mentorship.isAvailable
)

export const { removeLearner, setAvailability } = mentorshipSlice.actions;
export default mentorshipSlice.reducer;