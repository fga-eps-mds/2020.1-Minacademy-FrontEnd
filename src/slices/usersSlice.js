import { createSlice, createSelector } from '@reduxjs/toolkit';
import { login , logout , registerRequest, editUser } from '../services/usersService'

const initialState = {
  currentUser: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    /* eslint-disable no-unused-vars */
    /* eslint-disable no-param-reassign */
    setCurrentUser(state, action) {
      state.currentUser = action.payload
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.currentUser = action.payload
    },

    [logout.fulfilled]: (state, action) => {
      state.currentUser = null
    },

    [registerRequest.fulfilled]: (state, action) => {
        state.currentUser = action.payload
    },

    [editUser.fulfilled]: (state,action) => {
      state.currentUser = action.payload
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