import { createSlice, createSelector } from '@reduxjs/toolkit';
import { listUsersRedux } from '../services/usersService';

const initialState = {
  currentUser: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload
    }
  },
  extraReducers: {
    [listUsersRedux.fulfilled]: (state, action) => {
      state.usersList.push(...action.payload);
    }
  }
});

const selectUser = state => state.user;
export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
)

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;