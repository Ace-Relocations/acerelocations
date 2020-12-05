import axios from 'axios';
//const baseURL = 'http://localhost:3000/api/';
const baseURL = 'http://18.217.243.252:3000/api/';

const token = localStorage.getItem('userToken');

const user = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token,
  },
});

export default user;
