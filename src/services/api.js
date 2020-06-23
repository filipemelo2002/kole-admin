import axios from 'axios';

const api = axios.create({
  baseURL: 'https://kole-api.herokuapp.com',

});

export default api;
