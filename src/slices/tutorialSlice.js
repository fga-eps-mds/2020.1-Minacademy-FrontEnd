import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getQuestions, updateMarkdown, getModules } from '../services/tutorialServices';

const initialState = {
  currentModule: 1,
  markdown: '',
  activities: [{}],
  modules: []
};

const tutorial = createSlice({
  name: 'tutorial',
  initialState,
  reducers: {
    setCurrentModule(state, action) {
      state.currentModule = action.payload;
    }
  },
  extraReducers: {
    [getQuestions.fulfilled]: (state, action) => {
      state.activities = action.payload
    },
    [updateMarkdown.fulfilled]: (state, action) => {
      state.markdown = action.payload
    },
    [getModules.fulfilled]: (state, action) => {
      state.modules = action.payload
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

export const selectModuleList = createSelector(
  [selectTutorial],
  tutorial => tutorial.modules
)

export default tutorial.reducer;
export const { setCurrentModule } = tutorial.actions;