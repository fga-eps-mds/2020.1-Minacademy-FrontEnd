import { createSlice } from '@reduxjs/toolkit';
import { listUsersRedux } from '../services/usersService';

const initialState = {
  usersList: [],
  status: 'idle',
  error: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      state.usersList.push(action.payload.user)
    }
  },
  extraReducers: {
    [listUsersRedux.fulfilled]: (state, action) => {
      state.usersList.push(...action.payload);
    }
  }
});

const selectUsers = state => state.users.usersList;

export const { addUser } = usersSlice.actions;
export { selectUsers };
export default usersSlice.reducer;