import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import tutorialSlice from './slices/tutorialSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
    tutorial: tutorialSlice
  }
});