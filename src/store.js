import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/usersSlice';

export default configureStore({
  reducer: {
    users: usersReducer
  }
});