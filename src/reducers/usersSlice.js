import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  usersList: [{ id: '1', name: 'Gabriela'}]
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      state.usersList.push(action.payload.user)
    }
  }
});

const selectUsers = state => state.users.usersList;

export const { addUser } = usersSlice.actions;
export { selectUsers };
export default usersSlice.reducer;