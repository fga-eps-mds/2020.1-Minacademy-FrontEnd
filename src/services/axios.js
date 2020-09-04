import axios from 'axios';
import baseURL from './ambiente';

export default axios.create({
  baseURL,
  timeout: 40000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});
