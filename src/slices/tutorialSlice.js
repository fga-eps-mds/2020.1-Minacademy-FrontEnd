import { createSlice, createSelector } from '@reduxjs/toolkit';
import {
  getQuestions,
  answerQuestion,
  updateMarkdown,
  getModules,
  getProgress,
} from '../services/tutorialServices';

const initialState = {
  loading: false,
  currentModule: 1,
  markdown: '',
  questionsList: [],
  questionsResults: [],
  modules: [],
  completedModules: [],
  totalProgress: 0
};

const tutorial = createSlice({
  name: 'tutorial',
  initialState,
  reducers: {
    /* eslint-disable no-param-reassign */
    setCurrentModule(state, action) {
      state.currentModule = action.payload;
    }
  },
  extraReducers: {
    [getQuestions.fulfilled]: (state, action) => {
      state.questionsList = action.payload
    },

    [answerQuestion.pending]: (state) => {
      state.loading = true
    },
    [answerQuestion.fulfilled]: (state, action) => {
      const index = state.questionsResults.findIndex(item => item.question === action.payload.question)
      if (index !== -1) {
        state.questionsResults[index].isCorrect = action.payload.isCorrect
        state.questionsResults[index].alternative = action.payload.alternative
      } else {
        state.questionsResults = state.questionsResults.concat(action.payload)
      }
      state.loading = false
    },
    [answerQuestion.rejected]: (state) => {
      state.loading = false
    },

    [updateMarkdown.fulfilled]: (state, action) => {
      state.markdown = action.payload
    },
    [getModules.fulfilled]: (state, action) => {
      state.modules = action.payload
    },

    [getProgress.pending]: (state) => {
      state.loading = true
    },
    [getProgress.fulfilled]: (state, action) => {
      state.questionsResults = action.payload.questionsResults
      state.totalProgress = action.payload.totalProgress
      state.loading = false
    },
    [getProgress.rejected]: (state) => {
      state.loading = false
    },
  }
});

const selectTutorial = state => state.tutorial;
const getQuestion = (state, props) => {
  return state.tutorial.questionsList.find(question =>
    (question.number.toString() === props.match.params.activityNumber)
  );
};

const getCurrentModule = state => {
  return state.tutorial.modules.find(module =>
    (module.moduleNumber === state.tutorial.currentModule)
  );
};

/* eslint-disable no-shadow */
export const selectCurrentModule = createSelector(
  [selectTutorial],
  tutorial => tutorial.currentModule
);

export const selectMarkdown = createSelector(
  [selectTutorial],
  tutorial => tutorial.markdown
);

export const selectQuestion = createSelector(
  [getQuestion],
  question => question
);

export const selectModule = createSelector(
  [getCurrentModule],
  module => module
);

export const selectQuestionsResults = createSelector(
  [selectTutorial],
  tutorial => tutorial.questionsResults
);

export const selectQuestionsList = createSelector(
  [selectTutorial],
  tutorial => tutorial.questionsList
);

export const selectCompletedActivities = createSelector(
  [selectQuestionsResults],
  results => results.filter(result => result.isCorrect === true).length
);

export const selectTotalAnswers = createSelector(
  [selectTutorial],
  tutorial => tutorial.questionsResults.length
);

export const selectTotalProgress = createSelector(
  [selectTutorial],
  tutorial => tutorial.totalProgress
);

export const selectModuleList = createSelector(
  [selectTutorial],
  tutorial => tutorial.modules
);

export const isLoading = createSelector(
  [selectTutorial],
  tutorial => tutorial.loading
)

export default tutorial.reducer;
export const { setCurrentModule } = tutorial.actions;