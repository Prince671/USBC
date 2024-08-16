import axios from 'axios';
import authHeader from './authHeader';

const API_URL = 'http://localhost:8000/api/';

const getReceivedInterests = () => {
  return axios.get(API_URL + 'received_interests/', { headers: authHeader() });
};

const acceptInterest = (interestId) => {
  return axios.patch(`${API_URL}interests/${interestId}/`, { accepted: true }, { headers: authHeader() });
};

const rejectInterest = (interestId) => {
  return axios.patch(`${API_URL}interests/${interestId}/`, { accepted: false }, { headers: authHeader() });
};

export default {
  getReceivedInterests,
  acceptInterest,
  rejectInterest
};
