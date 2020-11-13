import { createSlice, createSelector } from '@reduxjs/toolkit';
import { promoteToMentor } from '../services/learnersService';
import { login , logout , registerRequest, editUser } from '../services/usersService' // eslint-disable-line import/no-cycle

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
    [login.pending]: (state, action) => {
      state.loading = true
    },
    [login.fulfilled]: (state, action) => {
      state.currentUser = action.payload.user
      state.loading = false
    },
    [login.rejected]: (state, action) => {
      state.loading = false
    },

    [logout.fulfilled]: (state, action) => {
      state.currentUser = null
    },

    [registerRequest.pending]: (state, action) => {
      state.loading = true
    },
    [registerRequest.fulfilled]: (state, action) => {
        state.loading = false
    },
    [registerRequest.rejected]: (state,action) => {
      state.loading = false
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

    [promoteToMentor.fulfilled]: (state, action) => {
      state.currentUser = action.payload
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