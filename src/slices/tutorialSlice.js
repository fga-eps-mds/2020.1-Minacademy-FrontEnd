import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getQuestions, updateMarkdown } from '../services/modulesServices';

const initialState = {
  currentModule: 1,
  markdown: '',
  activities: [{}],
};

const tutorial = createSlice({
  name: 'tutorial',
  initialState,
  reducers: {
    nextModule(state, action) {
      state.currentModule += 1
    },
    previousModule(state, action) {
      state.currentModule -=1
    }
  },
  extraReducers: {
    [getQuestions.fulfilled]: (state, action) => {
      state.activities = action.payload
    },
    [updateMarkdown.fulfilled]: (state, action) => {
      state.markdown = action.payload
    }
  }
});

const selectTutorial = state => state.tutorial;
const getActivity = (state, props) => {
  return state.tutorial.activities.find(activitie =>
      (activitie.number == props.match.params.activityNumber)
    )
}

export const selectCurrentModule = createSelector(
  [selectTutorial],
  tutorial => tutorial.currentModule
)

export const selectMarkdown = createSelector(
  [selectTutorial],
  tutorial => tutorial.markdown
)

export const selectActivity = createSelector(
  [getActivity],
  activity => activity
)
export const selectActivitiesList = createSelector(
  [selectTutorial],
  tutorial => tutorial.activities
)

export default tutorial.reducer;
export const { nextModule, previousModule } = tutorial.actions;