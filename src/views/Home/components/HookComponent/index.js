import React, { useState, useEffect } from 'react';
import { listUsers } from '../../../../services/usersService';
import { Header } from '../../../../components'

const HookComponent = () => {
  const [users, setUsers] = useState(['teste']);

  // const loadUsers = async() => {
  const loadUsers = () => {
    // const usersReponse = await listUsers();
    const usersReponse = listUsers();
    console.log(usersReponse);
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
      <div className="App">
        <UsersList/>
      </div>
    </>
  );
};

export default HookComponent;