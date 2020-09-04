import axios from './axios';

// const listUsers = async() => {
const listUsers = () => {
  // try {
  //   return axios.get('/users');
  // } catch(error) {
  //   return error;
  // }
  return [
    {name: 'Jaime'},
    {name: 'Geovana'},
    {name: 'Lucas'},
  ];
}

export {
  listUsers
}