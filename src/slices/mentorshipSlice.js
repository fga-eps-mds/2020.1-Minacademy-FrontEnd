import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getLearners, assignLearner, changeAvailability } from '../services/mentorsService'
import { getMentor, mentorRequest} from '../services/learnersService'

const initialState = {
  loading: false,
  learners: [],
  mentorData: [],
  mentor: null,
  isAvailable: false,
  fetchingLearners: false,
  fetchingMentor: false
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
    },
    [getMentor.fulfilled]: (state, action) => {
      state.mentorData = action.payload
    },
    [mentorRequest.pending]: (state, action) => {
      state.mentor = state.mentor
      state.fetchingMentor = true
    },
    [mentorRequest.fulfilled]: (state, action) => {
      state.mentor = action.payload ? action.payload._id : null
      state.fetchingMentor = false
    },
    [mentorRequest.rejected]: (state, action) => {
      state.mentor = state.mentor
      state.fetchingMentor = false
    },
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

export const fetchingMentor = createSelector(
  [selectMentorship],
  mentorship => mentorship.fetchingMentor
)

export const selectLearners = createSelector(
  [selectMentorship],
  mentorship => mentorship.learners
)

export const selectAvailability = createSelector(
  [selectMentorship],
  mentorship => mentorship.isAvailable
)

export const selectMentor = createSelector(
  [selectMentorship],
  mentorship => mentorship.mentorData
)

export const setMentor = createSelector(
  [selectMentorship],
  mentorship => mentorship.mentor
)

export const { removeLearner, setAvailability } = mentorshipSlice.actions;
export default mentorshipSlice.reducer;