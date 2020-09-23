import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  currentModule: 1,
  activities: [{
    id: 999,
    number: 1,
    description: 'Lorem ipsum?',
    alternatives: {
      a: 'lorem',
      b: 'ipsum',
      c:'dolor'}
    },
  {
    id: 111,
    number: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec erat quis lorem suscipit gravida. Aenean commodo ex nulla, et tristique nisi cursus nec?',
    alternatives: {
      a: 'uma opção',
      b: 'outra opção',
      c: 'teste opção'}
  }],
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
const getActivity = (state, props) => {
  return state.tutorial.activities.find(activity =>
      activity.number == props.match.params.activityNumber
    )
}

export const selectCurrentModule = createSelector(
  [selectTutorial],
  tutorial => tutorial.currentModule
)
export const selectActivity = createSelector(
  [getActivity],
  activity => activity
)
export const selectActivitiesList = createSelector(
  [selectTutorial],
  tutorial => tutorial.activities.map(activity => ({ number: activity.number}))
)

export default tutorial.reducer;
export const { nextModule, previousModule } = tutorial.actions;