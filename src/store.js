import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';

export default configureStore({
  reducer: {
    users: usersReducer
  }
});