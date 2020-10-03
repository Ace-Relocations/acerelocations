import axios from 'axios';
const baseURL = 'http://localhost:3000/api/';

const token = localStorage.getItem('userToken');

const user = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token,
    // Authorization:
    //   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJuZXR3b3JrIjoiYWtjZXNzLW5ldHdvcmsiLCJpYXQiOjE2MDAyNTMzMjMsImV4cCI6MTYwMDI2MDUyM30.UjtOb6-4dlEvKaQWvOmI8ts_4z58nVt0ulMRJvKsM_M',
  },
});

export default user;
