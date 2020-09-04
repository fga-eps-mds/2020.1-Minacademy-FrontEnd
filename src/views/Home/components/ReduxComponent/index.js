import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap';
import { Header } from '../../../../components';
import { addUser, selectUsers } from '../../../../slices/usersSlice';
import { listUsersRedux } from '../../../../services/usersService';

const HookComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const userStatus = useSelector(state => state.users.status)

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(listUsersRedux());
    }
  }, [dispatch, userStatus])

  const UsersList = () => (
    users.map(user => <p>{user.name}</p>)
  );

  return (
    <>
      <Header/>
      <UsersList/>
      <Button onClick={() => dispatch(addUser({user:{ name: 'Pessoa Adicionada' }}))} variant="dark">Add user</Button>
    </>
  );
};

export default HookComponent;