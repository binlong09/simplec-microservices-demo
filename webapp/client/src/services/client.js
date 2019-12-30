import axios from 'axios';
import Constants from './constants';

export const axiosInstance = axios.create({
  baseURL: typeof(process.env.REACT_ENV) === 'undefined' ? Constants.MONOLITH : Constants.MICROSERVICES,
  headers: { 'Content-Type': 'application/json' }
})