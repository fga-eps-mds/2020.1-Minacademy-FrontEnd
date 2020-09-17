import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  currentModule: 1
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
  }
});

const selectTutorial = state => state.tutorial;
export const selectCurrentModule = createSelector(
  [selectTutorial],
  tutorial => tutorial.currentModule
)

export default tutorial.reducer;
export const { nextModule, previousModule } = tutorial.actions;