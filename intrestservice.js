import axios from 'axios';
import authHeader from './authHeader';

const API_URL = 'http://localhost:8000/api/';

const sendInterest = (receiverId) => {
  return axios.post(API_URL + 'interests/', { receiver: receiverId }, { headers: authHeader() });
};

const getUsers = () => {
  return axios.get(API_URL + 'users/', { headers: authHeader() });
};

export default {
  sendInterest,
  getUsers
};
