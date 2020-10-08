import { createSlice, createSelector } from '@reduxjs/toolkit';
import {
  getQuestions,
  answerQuestion,
  updateMarkdown,
  getModules,
  getAnswers
} from '../services/tutorialServices';

const initialState = {
  currentModule: 1,
  markdown: '',
  activities: [],
  activitiesResults: [],
  modules: [],
  completedActivities: 0,
  completedModules: [],
  totalProgress: 0
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
    [answerQuestion.fulfilled]: (state, action) => {
      const activitiesResults = state.activitiesResults.filter(item => item.question !== action.payload.question)
      state.activitiesResults = [...activitiesResults, action.payload]
    },
    [updateMarkdown.fulfilled]: (state, action) => {
      state.markdown = action.payload
    },
    [getModules.fulfilled]: (state, action) => {
      state.modules = action.payload
    },
    [getAnswers.fulfilled]: (state, action) => {
      if (action.payload.queryAnswers) {
        state.activitiesResults = action.payload.queryAnswers
      }
      state.completedActivities = action.payload.correctAnswers
      state.totalProgress = action.payload.totalProgress
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

export const selectActivitiesResults = createSelector(
  [selectTutorial],
  tutorial => tutorial.activitiesResults
)

export const selectActivitiesList = createSelector(
  [selectTutorial],
  tutorial => tutorial.activities
)

export const selectCompletedActivities = createSelector(
  [selectTutorial],
  tutorial => tutorial.completedActivities
)

export const selectTotalProgress = createSelector(
  [selectTutorial],
  tutorial => tutorial.totalProgress
)

export const selectModuleList = createSelector(
  [selectTutorial],
  tutorial => tutorial.modules
)

export default tutorial.reducer;
export const { setCurrentModule } = tutorial.actions;