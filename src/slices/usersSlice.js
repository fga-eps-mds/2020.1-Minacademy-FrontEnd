import { createSlice, createSelector } from '@reduxjs/toolkit';
import { login, logout } from '../services/usersService';

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },

    [logout.fulfilled]: (state, action) => {
      state.currentUser = null;
    },

  },
});

const selectUser = (state) => state.user;
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser,
);

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
