import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { listUsers } from '../../../../services/usersService';
import { Header } from '../../../../components'

const HookComponent = () => {
  const [users, setUsers] = useState(['teste']);

  const loadUsers = async () => {
    const usersReponse = await listUsers();
    setUsers(usersReponse);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const UsersList = () => (
    users.map(user => <p>{user.name}</p>)
  );

  return (
    <>
      <Header/>
      <UsersList/>
      <Button onClick={() => setUsers([...users, {name: 'Novo usuário'}])} variant="dark">Add user</Button>
    </>
  );
};

export default HookComponent;