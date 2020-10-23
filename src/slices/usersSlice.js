import { createSlice, createSelector } from '@reduxjs/toolkit';
import { login , logout , registerRequest, editUser } from '../services/usersService'

const initialState = {
  loading: false,
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

    [editUser.pending]: (state,action) => {
      state.loading = true
    },
    [editUser.fulfilled]: (state,action) => {
      state.currentUser = action.payload
      state.loading = false
    },
    [editUser.rejected]: (state,action) => {
      state.loading = false
    },

  }
});

const selectUser = state => state.user;
export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
)

export const isLoading = createSelector(
  [selectUser],
  user => user.loading
)

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;