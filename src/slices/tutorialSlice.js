import { createSlice, createSelector } from '@reduxjs/toolkit';
import {
  getQuestions,
  answerQuestion,
  updateMarkdown,
  getModules,
  getProgress,
} from '../services/tutorialServices';

const initialState = {
  currentModule: 1,
  markdown: '',
  questionsList: [],
  questionsResults: [],
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
      state.questionsList = action.payload
    },
    [answerQuestion.fulfilled]: (state, action) => {
      const questionsResults = state.questionsResults.filter(item => item.question !== action.payload.question)
      state.questionsResults = [...questionsResults, action.payload]
    },
    [updateMarkdown.fulfilled]: (state, action) => {
      state.markdown = action.payload
    },
    [getModules.fulfilled]: (state, action) => {
      state.modules = action.payload
    },
    [getProgress.fulfilled]: (state, action) => {
      if (action.payload.queryAnswers) {
        state.questionsResults = action.payload.queryAnswers
      }
      state.completedActivities = action.payload.correctAnswers
      state.totalProgress = action.payload.totalProgress
    }
  }
});

const selectTutorial = state => state.tutorial;
const getActivity = (state, props) => {
  return state.tutorial.questionsList.find(question =>
    (question.number == props.match.params.activityNumber)
  )
}

const getCurrentModule = (state, props) => {
  return state.tutorial.modules.find(module =>
    (module.moduleNumber == state.tutorial.currentModule)
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

export const selectQuestion = createSelector(
  [getActivity],
  question => question
)

export const selectModule = createSelector(
  [getCurrentModule],
  module => module
)

export const selectQuestionsResults = createSelector(
  [selectTutorial],
  tutorial => tutorial.questionsResults
)

export const selectQuestionsList = createSelector(
  [selectTutorial],
  tutorial => tutorial.questionsList
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