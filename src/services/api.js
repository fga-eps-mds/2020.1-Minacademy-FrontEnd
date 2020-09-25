import axios from 'axios';
import baseURL from './ambiente';

export default axios.create({ baseURL, withCredentials: true });
