import { createSlice, createSelector } from '@reduxjs/toolkit';
import { assignLearner } from '../services/mentorsService'

const initialState = {
  loading: false,
  learners: []
};

const mentorshipSlice = createSlice({
  name: 'mentorship',
  initialState,
  reducers: {
    removeLearner(state, action) {
      state.learners = state.learners.filter(learner => learner._id !== action.payload)
    }
  },
  extraReducers: {
    [assignLearner.pending]: (state, action) => {
      state.loading = true
    },
    [assignLearner.fulfilled]: (state, action) => {
      state.learners = action.payload
      state.loading = false
    },
    [assignLearner.rejected]: (state, action) => {
      state.learners = action.payload
      state.loading = false
    }
  }
    
});

const selectMentorship = state => state.mentorship;

export const loading = createSelector(
  [selectMentorship],
  mentorship => mentorship.loading
)

export const selectLearners = createSelector(
  [selectMentorship],
  mentorship => mentorship.learners
)

export const { removeLearner } = mentorshipSlice.actions;
export default mentorshipSlice.reducer;