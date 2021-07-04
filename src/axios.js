import axios from 'axios';

const instance = axios.create({
  baseURL: "https://tinder-backend-may-21.herokuapp.com",
})

export default instance;