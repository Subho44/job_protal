import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5800/api/auth',
});

export default API;
