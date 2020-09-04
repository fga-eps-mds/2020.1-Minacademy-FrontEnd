import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap';
import { Header } from '../../../../components';
import { addUser, selectUsers } from '../../../../reducers/usersSlice';

const HookComponent = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const UsersList = () => (
    users.map(user => <p>{user.name}</p>)
  );

  return (
    <>
      <Header/>
      <UsersList/>
      <Button onClick={() => dispatch( addUser({ user: { name: 'Pessoa Adicionada' } }) )} variant="dark">Add user</Button>
    </>
  );
};

export default HookComponent;